import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Textarea from "./textarea";

interface HtmlRendererProps {
  htmlString: string;
}

const HtmlRenderer: React.FC<HtmlRendererProps> = ({ htmlString }) => {
  const createElementsFromHTML = (htmlString: string): React.ReactNode => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");

    const traverseNodes = (node: ChildNode): React.ReactNode => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent; // 텍스트 노드의 경우
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        const children = Array.from(element.childNodes).map(traverseNodes);

        // 빈 태그, 공백 태그 및 특정 태그 예외 처리
        const isEmptyOrWhitespace = children.every(
          (child) => typeof child === "string" && child.trim() === "",
        );

        const isExceptionTag = ["hr", "br", "ol", "ul", "span"].includes(
          element.tagName.toLowerCase(),
        );

        if (isEmptyOrWhitespace || isExceptionTag) {
          return React.createElement(
            element.tagName.toLowerCase(),
            {},
            children,
          );
        }

        // React.createElement를 사용하여 JSX 요소 생성
        return React.createElement(
          element.tagName.toLowerCase(), // 태그 이름
          {}, // 속성은 생략
          [
            ...children,
            <Textarea
              key={`input-${element.tagName}`}/>,
          ],
        );
      }

      return null;
    };

    return Array.from(doc.body.childNodes).map(traverseNodes);
  };

  return <div>{createElementsFromHTML(htmlString)}</div>;
};

export default function ArticleDetail(): JSX.Element {
  const { id } = useParams();
  const [detail, setDetail] = useState<
    Awaited<ReturnType<typeof window.dbApi.article.detail>>
  >({});

  useEffect(() => {
    window.dbApi.article.detail(Number(id)).then((article) => {
      setDetail(article);
    });
  }, [id]); // id에 변화가 있을 때 effect 실행

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
