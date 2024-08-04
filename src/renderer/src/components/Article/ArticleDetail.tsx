import { useParams } from "react-router-dom";
import ArticlePiece from "./ArticlePiece";
import { useState, useEffect, useRef } from "react";

interface HtmlRendererProps {
  htmlString: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // DOMParser를 사용하여 HTML 문자열을 문서로 파싱
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");

      // 파싱된 HTML 문서의 body에서 내용을 가져와서 컨테이너에 추가
      containerRef.current.innerHTML = "";
      Array.from(doc.body.childNodes).forEach((node) => {
        containerRef.current?.appendChild(node);
      });
    }
  }, [htmlString]);

  return <div ref={containerRef} />;
};

export default function ArticleDetail(): JSX.Element {
  const { id } = useParams();
  const [detail, setDetail] = useState<
    Awaited<ReturnType<typeof window.dbApi.article.detail>>
  >({});
  useEffect(() => {
    window.dbApi.article.detail(Number(id)).then((article) => {
      console.log(article);
      setDetail(article);
      console.log(detail);
    });
  }, []);
  return (
    <>
      <div className="w-full h-34 px-4 py-4 bg-gradient-to-br from-secondaryBG via-stone-900 to-stone-900 rounded-2xl flex-col justify-center items-start gap-4 inline-flex mb-4">
        <div className="w-full text-white text-2xl font-normal font-['Rozha One'] leading-tight">
          {detail.title}
        </div>
        <div className="w-full text-gray-200 text-xs font-medium font-['Pretendard Variable'] leading-3">
          By {detail.author}
        </div>
        <div className="h-4 justify-start items-center gap-0.5 inline-flex">
          <div className="px-2.5 py-0.5 bg-red-500 rounded-lg justify-center items-center gap-0.5 flex">
            <div className="text-white text-xs font-normal font-['Rozha One'] leading-3">
              BBC
            </div>
          </div>
          <div className="px-2.5 py-0.5 bg-white rounded-lg justify-center items-center gap-0.5 flex">
            <div className="w-12 text-center text-red-500 text-xs font-semibold font-['Pretendard Variable'] leading-3">
              Level {`${detail.level}`}
            </div>
          </div>
        </div>
      </div>
      <div className="main-container prose lg:prose-lg dark:prose-invert">
        <HtmlRenderer htmlString={detail.body} />
      </div>
    </>
  );
}
