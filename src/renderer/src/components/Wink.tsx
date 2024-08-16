import React, { useState, useEffect } from "react";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { interpolateRgb } from "d3";

// NLP 초기화
const nlp = winkNLP(model);
const its = nlp.its;

const Wink: React.FC<{ body: string }> = ({ body }) => {
  const [text, setText] = useState<string>("");
  const [highlightPercentage, setHighlightPercentage] = useState<number>(20);
  const [focus, setFocus] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  useEffect(() => {
    setText(body);
  }, [body]);

  // 문장별 중요도 계산 함수
  const sentenceWiseNormalizedWeights = (doc: any, its: any) => {
    return doc.out(its.sentenceWiseImportance).map((e: any) => e.importance);
  };

  const highlightText = (importance: number, maxImportance: number) => {
    if (!showControls || highlightPercentage === 0) {
      // 하이라이팅 비활성화 시 빈 스타일 반환
      return { backgroundColor: "transparent", color: "white", opacity: 1 };
    }

    // 하이라이팅 색상의 투명도 조절
    const normalizedImportance = importance / maxImportance; // 중요도 정규화
    const opacity = Math.min(1, highlightPercentage / 100); // 슬라이더 값에 따라 최대 투명도 설정
    const colorScale = interpolateRgb(
      `rgba(151, 78, 175, 0)`, // 투명한 색상
      `rgba(151, 78, 175, ${opacity})`, // 완전한 색상
    );
    const backgroundColor = colorScale(normalizedImportance);

    const baseOpacity = focus ? 0.2 : 1;

    return {
      backgroundColor: backgroundColor,
      color: "white", // 글자색을 흰색으로 설정
      opacity: baseOpacity,
      transition: "opacity 0.1s ease-in-out", // 깜빡임 문제 해결
      display: "inline",
    };
  };

  const processText = () => {
    const doc = nlp.readDoc(text);
    const sentences = doc.sentences().out(its.value);
    const sentenceWeights = sentenceWiseNormalizedWeights(doc, its);

    const maxImportance = Math.max(...sentenceWeights);

    return sentences.map((sentence, index) => {
      const importance = sentenceWeights[index];
      const style = highlightText(importance, maxImportance);

      // HTML 파싱 및 하이라이팅 적용
      const parser = new DOMParser();
      const docFragment = parser.parseFromString(sentence, "text/html");
      const elements = Array.from(docFragment.body.childNodes);

      return elements.map((element, i) => {
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
                  onMouseLeave={(e) => {
                    if (focus) e.currentTarget.style.opacity = "0.2";
                  }}
                >
                  {child.textContent}
                </span>
              );
            } else if (child.nodeType === Node.ELEMENT_NODE) {
              return React.cloneElement(
                React.createElement(
                  (child as HTMLElement).tagName.toLowerCase(),
                  {
                    key: j,
                    style: style,
                    onMouseEnter: (e) => {
                      if (focus) e.currentTarget.style.opacity = "1";
                    },
                    onMouseLeave: (e) => {
                      if (focus) e.currentTarget.style.opacity = "0.2";
                    },
                  },
                ),
                null,
                child.textContent,
              );
            } else {
              return null;
            }
          });

          // 블록 요소 유지 및 인라인 하이라이팅 적용
          return React.createElement(
            TagName,
            {
              key: i,
              style: { display: "block" }, // 블록 속성 유지
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
              onMouseLeave={(e) => {
                if (focus) e.currentTarget.style.opacity = "0.2";
              }}
            >
              {element.textContent}
            </span>
          );
        } else {
          return null;
        }
      });
    });
  };

  const handleFocusToggle = () => {
    setFocus((prevFocus) => !prevFocus);
  };

  const handleControlToggle = () => {
    if (showControls) {
      setFocus(false); // 컨트롤 비활성화 시 포커스 모드도 비활성화
    }
    setShowControls(!showControls);
  };

  return (
    <div>
      <div className="mb-4 flex items-center">
        <label className="mr-2">Enable Controls</label>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showControls}
            onChange={handleControlToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>

      {showControls && (
        <div>
          <div className="mb-4">
            <label className="mr-2">Highlight Percentage:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={highlightPercentage}
              onChange={(e) => setHighlightPercentage(Number(e.target.value))}
              className="w-full"
            />
            <span className="ml-2">{highlightPercentage}%</span>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={focus}
                onChange={handleFocusToggle}
                className="mr-2"
              />
              Focus Mode
            </label>
          </div>
        </div>
      )}

      <div className="prose prose-basic dark:prose-invert">{processText()}</div>
    </div>
  );
};

export default Wink;
