import { Mark } from "./Icons";
import Share from "@assets/img/share.svg";
import { useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
} from "react-share";

export default function PostActionBlock({
  title,
  URL,
  saved,
  articleID,
  reRender,
  setReRender,
}: {
  title: string;
  URL: string;
  saved: number;
  articleID: number;
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const body = `읽기 지원도구 '산뜻'과 함께 ${title} 글을 읽어보세요!\n${URL}`;
  const [shareShow, setShareShow] = useState(false);
  return (
    <div className="flex w-full justify-between relative">
      <div className="flex gap-2">
        <Mark
          saved={saved}
          articleID={articleID}
          reRender={reRender}
          setReRender={setReRender}
        />
        <img
          src={Share}
          alt="공유하기"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setShareShow(!shareShow);
          }}
        />
      </div>
      {shareShow ? (
        <div className="absolute top-6 left-6 flex gap-2 bg-primaryBG p-2 rounded-sm border-variable-collection-primaryBd border-[1px]">
          <EmailShareButton subject={title} url={body}>
            <EmailIcon size={24} round={true} />
          </EmailShareButton>
          <FacebookShareButton hashtag="SANDDEOT" url={URL}>
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
          <TwitterShareButton title={title} url={URL}>
            <TwitterIcon size={24} round={true} />
          </TwitterShareButton>
          <TelegramShareButton title={title} url={URL}>
            <TelegramIcon size={24} round={true} />
          </TelegramShareButton>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
