import React, { useState, useEffect, useCallback } from "react";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { interpolateRgb } from "d3";

// NLP 모델 초기화
const nlp = winkNLP(model);
const its = nlp.its;

// 타입 정의 추가
interface WinkDocument {
  out: (
    param: typeof its.sentenceWiseImportance,
  ) => Array<{ importance: number }>;
}

const Wink: React.FC<{
  articleTitle: string;
  body: string;
  highlightPercentage: number; // 하이라이트 강도 (0-100)
  focus: boolean; // 포커스 모드 활성화 여부
  showControls: boolean; // 컨트롤 표시 여부
}> = ({ articleTitle, body, highlightPercentage, focus, showControls }) => {
  // 본문 텍스트와 특수 태그 상태 관리
  const [text, setText] = useState<string>("");
  const [nonContentElements, setNonContentElements] = useState<string[]>([]);

  // 초기 텍스트 처리
  useEffect(() => {
    setText(body);
    extractNonContentTags(body);
  }, [body]);

  /**
   * 문장별 중요도 점수 계산
   * @param doc NLP 문서 객체
   * @returns 각 문장의 정규화된 중요도 점수 배열
   */
  const sentenceWiseNormalizedWeights = useCallback((doc: WinkDocument) => {
    return doc.out(its.sentenceWiseImportance).map((e) => e.importance);
  }, []);

  /**
   * 문장의 중요도에 따른 하이라이트 스타일 계산
   * @param importance 문장의 중요도 점수
   * @param maxImportance 전체 문장 중 최대 중요도 점수
   */
  const highlightText = useCallback(
    (importance: number, maxImportance: number): React.CSSProperties => {
      const isHighlightActive = showControls && highlightPercentage > 0;
      const normalizedImportance = importance / maxImportance;
      const opacity = Math.min(1, highlightPercentage / 100);

      // 보라색 계열의 그라데이션 색상 생성
      const colorScale = interpolateRgb(
        `rgba(151, 78, 175, 0)`,
        `rgba(151, 78, 175, ${opacity})`,
      );

      // 배경색 계산: 중요도가 높은 경우에만 적용
      const backgroundColor =
        isHighlightActive &&
        parseFloat(
          colorScale(normalizedImportance).split(",")[3]?.split(")")[0],
        ) > 0.4
          ? colorScale(normalizedImportance)
          : "transparent";

      // 포커스 모드일 때 덜 중요한 텍스트는 흐리게 표시
      const baseOpacity = focus && backgroundColor === "transparent" ? 0.2 : 1;

      return {
        backgroundColor,
        color: "white",
        opacity: baseOpacity,
        transition: "opacity 0.3s ease",
      };
    },
    [focus, highlightPercentage, showControls],
  );

  /**
   * HTML에서 특수 태그(이미지, 코드 블록 등) 추출
   * @param html 원본 HTML 문자열
   */
  const extractNonContentTags = (html: string): void => {
    const parser = new DOMParser();
    const docFragment = parser.parseFromString(html, "text/html");
    const removableElements = docFragment.querySelectorAll(
      "img, input, br, hr, area, base, col, embed, source, track, wbr, figure, pre, code",
    );
    const extractedElements: string[] = [];

    removableElements.forEach((element) => {
      extractedElements.push(element.outerHTML);
      element.remove();
    });

    setNonContentElements(extractedElements);
    setText(docFragment.body.innerHTML);
  };

  // HTML 요소를 React 요소로 변환하고 하이라이트 적용
  const renderWithHighlight = (
    element: ChildNode,
    style: React.CSSProperties,
  ): React.ReactNode => {
    if (element.nodeType === Node.ELEMENT_NODE) {
      const TagName = (element as HTMLElement).tagName.toLowerCase();
      const children = Array.from(element.childNodes).map((child) =>
        renderWithHighlight(child, style),
      );

      return React.createElement(
        TagName,
        {
          key: `${TagName}-${Math.random()}`,
          style: {},
          onMouseEnter: (e: React.MouseEvent) => {
            if (focus && style.backgroundColor === "transparent") {
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }
          },
          onMouseLeave: (e: React.MouseEvent) => {
            if (focus && style.backgroundColor === "transparent") {
              (e.currentTarget as HTMLElement).style.opacity = "0.8";
            }
          },
        },
        children,
      );
    } else if (element.nodeType === Node.TEXT_NODE) {
      return (
        <span
          key={Math.random()}
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

  // 텍스트 처리 및 렌더링
  const processText = useCallback(() => {
    const doc = nlp.readDoc(text);
    const sentences = doc.sentences().out(its.value);
    const sentenceWeights = sentenceWiseNormalizedWeights(doc);
    const maxImportance = Math.max(...sentenceWeights);

    let tagIndex = 0;

    return sentences.map((sentence: string, index: number) => {
      const importance = sentenceWeights[index];
      const style = highlightText(importance, maxImportance);

      const parser = new DOMParser();
      const docFragment = parser.parseFromString(sentence, "text/html");
      const elements = Array.from(docFragment.body.childNodes);

      const sentenceElements = elements.map((element) =>
        renderWithHighlight(element, style),
      );

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
  }, [text, nonContentElements, highlightText, sentenceWiseNormalizedWeights]);

  return (
    <div className="prose prose-basic dark:prose-invert !max-w-full w-full flex-grow overflow-y-auto h-full p-8">
      <h2>{articleTitle}</h2>
      {processText()}
    </div>
  );
};

export default Wink;
