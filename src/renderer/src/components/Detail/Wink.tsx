import React, { useState, useEffect } from "react";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { interpolateRgb } from "d3";

// NLP 초기화
const nlp = winkNLP(model);
const its = nlp.its;

const Wink: React.FC<{
  articleTitle: string;
  body: string;
  highlightPercentage: number;
  focus: boolean;
  showControls: boolean;
}> = ({ articleTitle, body, highlightPercentage, focus, showControls }) => {
  const [text, setText] = useState<string>("");
  const [nonContentElements, setNonContentElements] = useState<string[]>([]);

  useEffect(() => {
    setText(body);
    extractNonContentTags(body); // 자식 요소를 가질 수 없는 태그 및 code 블록, figure 태그 처리
  }, [body]);

  const sentenceWiseNormalizedWeights = (doc: any, its: any) => {
    return doc.out(its.sentenceWiseImportance).map((e: any) => e.importance);
  };

  const highlightText = (importance: number, maxImportance: number) => {
    const isHighlightActive = showControls && highlightPercentage > 0;

    const normalizedImportance = importance / maxImportance;
    const opacity = Math.min(1, highlightPercentage / 100); // 슬라이더 값에 따라 최대 투명도 설정
    const colorScale = interpolateRgb(
      `rgba(151, 78, 175, 0)`,
      `rgba(151, 78, 175, ${opacity})`,
    );

    const backgroundColor =
      isHighlightActive &&
      colorScale(normalizedImportance).split(",")[3]?.split(")")[0] > 0.4
        ? colorScale(normalizedImportance)
        : "transparent";

    // 포커스 모드에서의 기본 투명도 설정
    const baseOpacity = focus && backgroundColor === "transparent" ? 0.2 : 1; // 하이라이팅된 텍스트는 투명도를 낮추지 않음

    return {
      backgroundColor,
      color: "white",
      opacity: baseOpacity,
      transition: "opacity 0.3s ease",
    };
  };

  const extractNonContentTags = (html: string) => {
    const parser = new DOMParser();
    const docFragment = parser.parseFromString(html, "text/html");
    const removableElements = docFragment.querySelectorAll(
      "img, input, br, hr, area, base, col, embed, source, track, wbr, figure, pre, code",
    );
    const extractedElements: string[] = [];

    removableElements.forEach((element) => {
      extractedElements.push(element.outerHTML);
      element.remove(); // 텍스트에서 해당 태그 제거
    });

    setNonContentElements(extractedElements); // 태그들을 저장
    setText(docFragment.body.innerHTML); // 해당 태그들을 제거한 텍스트로 설정
  };

  const renderWithHighlight = (
    element: ChildNode,
    style: React.CSSProperties,
  ): React.ReactNode => {
    if (element.nodeType === Node.ELEMENT_NODE) {
      const TagName = (element as HTMLElement).tagName.toLowerCase();
      const children = Array.from(element.childNodes).map((child, j) =>
        renderWithHighlight(child, style),
      );

      return React.createElement(
        TagName,
        {
          key: `${TagName}-${Math.random()}`, // 고유한 키 값
          style: {}, // 블록 태그의 기본 디스플레이 속성 유지
          onMouseEnter: (e: React.MouseEvent) => {
            // 포커스 모드가 활성화된 경우 마우스를 올리면 투명도를 1로 설정
            if (focus && style.backgroundColor === "transparent") {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }
          },
          onMouseLeave: (e: React.MouseEvent) => {
            // 포커스 모드가 활성화된 경우 마우스를 떼면 기본 투명도로 돌아감
            if (focus && style.backgroundColor === "transparent") {
              (e.currentTarget as HTMLElement).style.opacity = "0.2";
            }
          },
        },
        children,
      );
    } else if (element.nodeType === Node.TEXT_NODE) {
      return (
        <span
          key={Math.random()} // 고유한 키 값
          style={style}
          onMouseEnter={(e) => {
            if (focus && style.backgroundColor === "transparent") {
              e.currentTarget.style.opacity = "1";
            }
          }}
          onMouseLeave={(e) => {
            if (focus && style.backgroundColor === "transparent") {
              e.currentTarget.style.opacity = "0.2";
            }
          }}
        >
          {element.textContent}
        </span>
      );
    }
    return null;
  };

  const processText = () => {
    const doc = nlp.readDoc(text);
    const sentences = doc.sentences().out(its.value);
    const sentenceWeights = sentenceWiseNormalizedWeights(doc, its);

    const maxImportance = Math.max(...sentenceWeights);

    let tagIndex = 0;

    return sentences.map((sentence, index) => {
      const importance = sentenceWeights[index];
      const style = highlightText(importance, maxImportance);

      const parser = new DOMParser();
      const docFragment = parser.parseFromString(sentence, "text/html");
      const elements = Array.from(docFragment.body.childNodes);

      const sentenceElements = elements.map((element) =>
        renderWithHighlight(element, style),
      );

      // 각 문장의 마지막에 자식 요소가 없는 태그 및 code, pre, figure 태그를 삽입
      if (tagIndex < nonContentElements.length) {
        sentenceElements.push(
          <span
            key={`tag-${tagIndex}`}
            dangerouslySetInnerHTML={{ __html: nonContentElements[tagIndex++] }}
          />,
        );
      }

      return (
        <div key={`sentence-${index}`} style={{ display: "block" }}>
          {sentenceElements}
        </div>
      );
    });
  };

  return (
    <div className="prose prose-basic dark:prose-invert !max-w-full w-full flex-grow overflow-y-auto h-full p-8">
      <h2>{articleTitle}</h2>
      {processText()}
    </div>
  );
};

export default Wink;
