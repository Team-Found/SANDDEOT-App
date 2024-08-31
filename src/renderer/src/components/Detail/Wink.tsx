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
    const opacity = Math.min(1, highlightPercentage / 100);
    const colorScale = interpolateRgb(
      `rgba(151, 78, 175, 0)`,
      `rgba(151, 78, 175, ${opacity})`,
    );

    const backgroundColor =
      isHighlightActive &&
      colorScale(normalizedImportance).split(",")[3]?.split(")")[0] > 0.4
        ? colorScale(normalizedImportance)
        : "transparent";

    const baseOpacity =
      focus &&
      !(
        isHighlightActive &&
        colorScale(normalizedImportance).split(",")[3]?.split(")")[0] > 0.4
      )
        ? 0.2
        : 1;

    return {
      backgroundColor,
      color: "white",
      opacity: baseOpacity,
      transition: "opacity 0.3s ease",
      display: "inline",
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

      const sentenceElements = elements.map((element, i) => {
        if (element.nodeType === Node.ELEMENT_NODE) {
          const TagName = (element as HTMLElement).tagName.toLowerCase();

          const children = Array.from(element.childNodes).map((child, j) => {
            if (child.nodeType === Node.TEXT_NODE) {
              return (
                <span
                  key={j}
                  style={style}
                  onMouseEnter={(e) => {
                    if (focus) e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={
                    style.backgroundColor === "transparent"
                      ? (e) => {
                          if (focus) e.currentTarget.style.opacity = "0.2";
                        }
                      : (e) => {
                          if (focus) e.currentTarget.style.opacity = "1";
                        }
                  }
                >
                  {child.textContent}
                </span>
              );
            } else if (child.nodeType === Node.ELEMENT_NODE) {
              const ChildTagName = (child as HTMLElement).tagName.toLowerCase();

              if (ChildTagName === "a") {
                return (
                  <a
                    key={j}
                    href={(child as HTMLAnchorElement).href}
                    style={style}
                    onMouseEnter={(e) => {
                      if (focus) e.currentTarget.style.opacity = "1";
                    }}
                    onMouseLeave={
                      style.backgroundColor === "transparent"
                        ? (e) => {
                            if (focus) e.currentTarget.style.opacity = "0.2";
                          }
                        : (e) => {
                            if (focus) e.currentTarget.style.opacity = "1";
                          }
                    }
                  >
                    {(child as HTMLElement).innerHTML}
                  </a>
                );
              } else if (ChildTagName === "pre" || ChildTagName === "code") {
                // `pre` 및 `code` 블록 처리
                return (
                  <div
                    key={j}
                    style={{
                      position: "relative",
                      marginBottom: "1rem",
                      backgroundColor: style.backgroundColor,
                      padding: "8px",
                      borderRadius: "4px",
                    }}
                  >
                    <pre
                      style={{
                        margin: "0",
                        overflow: "auto",
                        maxHeight: "400px",
                      }}
                    >
                      <code>{(child as HTMLElement).innerHTML}</code>
                    </pre>
                  </div>
                );
              } else {
                return React.createElement(
                  ChildTagName,
                  {
                    key: j,
                    style: style,
                    onMouseEnter: (e) => {
                      if (focus) e.currentTarget.style.opacity = "1";
                    },
                    onMouseLeave:
                      style.backgroundColor === "transparent"
                        ? (e) => {
                            if (focus) e.currentTarget.style.opacity = "0.2";
                          }
                        : (e) => {
                            e.currentTarget.style.opacity = "1";
                          },
                  },
                  (child as HTMLElement).innerHTML,
                );
              }
            } else {
              return null;
            }
          });

          return React.createElement(
            TagName,
            {
              key: i,
              style: {
                display: TagName === "h4" ? "block" : "inline",
                fontSize: TagName === "h4" ? "1.25em" : "inherit",
              },
            },
            children,
          );
        } else if (element.nodeType === Node.TEXT_NODE) {
          return (
            <span
              key={i}
              style={style}
              onMouseEnter={(e) => {
                if (focus) e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={
                style.backgroundColor === "transparent"
                  ? (e) => {
                      if (focus) e.currentTarget.style.opacity = "0.2";
                    }
                  : (e) => {
                      if (focus) e.currentTarget.style.opacity = "1";
                    }
              }
            >
              {element.textContent}
            </span>
          );
        } else {
          return null;
        }
      });

      // 각 문장의 마지막에 자식 요소가 없는 태그 및 code, pre, figure 태그를 삽입 (원하는 위치에 삽입 가능)
      if (tagIndex < nonContentElements.length) {
        sentenceElements.push(
          <span
            key={`tag-${tagIndex}`}
            dangerouslySetInnerHTML={{ __html: nonContentElements[tagIndex++] }}
          />,
        );
      }

      return sentenceElements;
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
