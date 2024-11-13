import React, { useEffect, useState } from "react";
import { RssBlock } from "./RssBlock";
import search from "@assets/img/search.svg";
import Modal from "react-modal";
import { toast } from "react-toastify";
import FollowedRSSList from "./FollowedRSSList";
import { useDispatch, useSelector } from "react-redux";
import { setReRender } from "./../../../utils/store";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--variable-collection-primarybg)",
    border: "solid 1px var(--variable-collection-primaryBd)",
    borderRadius: "22px",
    padding: "20px",
    width: "400px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function PromptModal(): JSX.Element {
  const dispatch = useDispatch();

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputValue, setInputValue] = useState("");
  function openModal(): void {
    setIsOpen(true);
  }

  function afterOpenModal(): void {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function insertRss(): void {
    window.dbApi.article
      .selectRSS(inputValue)

      .then(() => {
        window.dbApi.article.rssStateUp(inputValue).then(() => {
          toast.success("RSS가 추가되었습니다.");
          closeModal();
          dispatch(setReRender());
        });
      })

      .catch(() => {
        window.api
          .insertRss(inputValue)
          .then((res) => {
            if (res.status === "success") {
              window.dbApi.rss.add({
                RSSID: res.rssID,
                RSSURL: res.rssUrl,
                RSSName: res.rssName,
                RSSImageUrl: res.favicon,
              });
              toast.success("RSS가 추가되었습니다.");
              closeModal();
            } else {
              toast.error("RSS 추가에 실패했습니다.");
            }
          })
          .then(() => {
            dispatch(setReRender());
          })
          .catch((err) => {
            console.log(err);
            toast.error("RSS 추가에 실패했습니다.");
          });
      });
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  return (
    <>
      <div onClick={openModal} className="w-full">
        <RssBlock blogTitle="#" isFollowed={true} property1={false} />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <input
            type="text"
            placeholder="RSS Link"
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(inputValue);
            }}
            className="w-full bg-transparent focus:outline-none mb-8 border-primaryBd border-[1px] rounded-md p-3"
          ></input>
        </div>
        <div className="flex justify-between">
          <button
            onClick={closeModal}
            className="py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500"
          >
            취소
          </button>
          <button
            onClick={insertRss}
            className="py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
          >
            확인
          </button>
        </div>
      </Modal>
    </>
  );
}

const FrameWrapper = (): JSX.Element => {
  const reRenderValue = useSelector((state) => state.reRender.value);

  const [rssList, setRssList] = useState<
    Awaited<ReturnType<typeof window.dbApi.rss.list>>
  >([]);

  useEffect(() => {
    window.dbApi.rss.list().then((rows) => {
      const alreadyRSS = rows.map((entry) => entry.RSSURL); //나중에 RSSID로 비교하자
      setRssList(
        recommendJSON.filter((item) => !alreadyRSS.includes(item.domain)),
      );
    });
  }, [reRenderValue]);

  // const [reRender, setReRender] = useState(false);
  return (
    <div className="flex flex-col w-[295px] h-[810px] items-start gap-[17px] pt-2 pb-[45px] px-0 border-l-[1px] border-primaryBd">
      <div className="px-4 w-full box-border">
        <div className="flex items-center gap-3.5 px-3 mt-2 self-stretch w-full flex-[0_0_auto] rounded-2xl overflow-hidden border border-solid border-variable-collection-primaryborder">
          <label htmlFor="input1">
            <img className="w-9 h-9" alt="Search" src={search} />
          </label>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none"
            id="input1"
          ></input>
          <div className="w-full mt-[-1.00px] [font-family:'Pretendard_Variable-Regular',Helvetica] font-normal text-[#cbcbcb] text-sm tracking-[0] leading-[normal]"></div>
        </div>
        <div className="flex flex-col items-start gap-[30px] self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full ">
            <div className="font-bold text-variable-collection-primarytext text-base pt-5">
              구독한 RSS
            </div>
            <div className="flex flex-col items-start gap-0 self-stretch w-full flex-[0_0_auto] box-border">
              <FollowedRSSList />
              <PromptModal />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 self-stretch w-full flex-[0_0_auto]">
            <div className="w-full self-stretch mt-[-1.00px] [font-family:'Pretendard_Variable-Bold',Helvetica] font-bold text-variable-collection-primarytext text-base tracking-[0] leading-[normal]">
              이런 RSS는 어때요?
            </div>
            <div className="flex flex-col items-start gap-[-3px] self-stretch w-full flex-[0_0_auto]">
              {rssList.map((data, index) => (
                <RssBlock
                  key={index}
                  blogTitle={data.blogTitle}
                  imageUrl={data.imageUrl}
                  isFollowed={false}
                  domain={data.domain}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const recommendJSON = [
  {
    blogTitle: "Apple",
    imageUrl:
      "https://developer.apple.com/wwdc24/images/motion/axiju/endframe-small_2x.jpg",
    domain: "https://www.apple.com/newsroom/rss-feed.rss",
  },
  {
    blogTitle: "Billboard",
    domain: "https://www.billboard.com/feed",
  },
  {
    blogTitle: "Fox News",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sjsqGIakPgU005shgWAFs7OpIgNxT42Ptw&s",
    domain: "https://moxie.foxnews.com/google-publisher/latest.xml",
  },
];

export default FrameWrapper;
