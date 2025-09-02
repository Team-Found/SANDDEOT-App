import React, { useEffect, useState } from "react";
import { RssBlock } from "./RssBlock";
import Modal from "react-modal";
import { toast } from "react-toastify";
import FollowedRSSList from "./FollowedRSSList";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setReRender } from "./../../../utils/store";

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
  async function insertRss(): Promise<void> {
    try {
      // Check if RSS already exists in the DB
      await window.dbApi.article.selectRSS(inputValue);
      // If it exists, update its state
      await window.dbApi.article.rssStateUp(inputValue);
      toast.success("기존 RSS를 구독했습니다.");
    } catch (error) {
      // If it doesn't exist, add it as a new RSS feed
      try {
        const res = await window.api.insertRss(inputValue);
        if (res.status === "success") {
          await window.dbApi.rss.add({
            RSSID: res.rssID,
            RSSURL: res.rssUrl,
            RSSName: res.rssName,
            RSSImageUrl: res.favicon,
          });
          toast.success("새로운 RSS를 추가했습니다.");
        } else {
          toast.error("RSS 추가에 실패했습니다.");
        }
      } catch (err) {
        console.error("Failed to insert new RSS:", err);
        toast.error("RSS 추가에 실패했습니다.");
      }
    } finally {
      closeModal();
      dispatch(setReRender());
    }
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  return (
    <>
      <div onClick={openModal} className="w-full">
        <div
          className={`[border-bottom-style:solid] border-[#161616] w-full flex border-t items-center [border-top-style:solid] gap-2 px-0 py-1.5 border-b relative `}
        >
          <img src="/src/components/Root/RightSideBar/Plus2.svg" alt="" />
          <div className="font-medium text-variable-collection-blue60 text-xs">
            새로 추가하기
          </div>
        </div>
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
  const reRenderValue = useSelector((state: RootState) => state.reRender.value);

  type RSSItem =
    | { blogTitle: string; imageUrl: string; domain: string }
    | { blogTitle: string; domain: string; imageUrl?: undefined };

  const [rssList, setRssList] = useState<RSSItem[]>([]); // 타입을 명시적으로 지정

  useEffect(() => {
    const fetchRssList = async () => {
      try {
        const rows = await window.dbApi.rss.list();
        const alreadyRSS = rows.map((entry) => entry.RSSURL);
        setRssList(
          recommendJSON.filter((item) => !alreadyRSS.includes(item.domain)),
        );
      } catch (error) {
        console.error("Failed to fetch RSS list:", error);
      }
    };

    fetchRssList();
  }, [reRenderValue, recommendJSON]);

  // const [reRender, setReRender] = useState(false);
  return (
    <div className="flex flex-col w-[295px] h-[810px] items-start gap-[17px] pt-2 pb-[45px] px-0 border-l-[1px] border-primaryBd">
      <div className="px-4 w-full box-border">
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
