import React, { useState } from "react";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { quantile, interpolateRgb } from "d3";

// NLP 초기화
const nlp = winkNLP(model);
const its = nlp.its;

const App: React.FC = () => {
  const [text, setText] = useState<string>(
    "Children living in Japan’s hottest city will be given <h1>specially designed umbrellas</h1> to protect them from the heat.",
  );
  const [highlightPercentage, setHighlightPercentage] = useState<number>(20);
  const [focus, setFocus] = useState<boolean>(false);

  // 문장별 중요도 계산 함수
  const sentenceWiseNormalizedWeights = (doc: any, its: any) => {
    return doc.out(its.sentenceWiseImportance).map((e: any) => e.importance);
  };

  const highlightText = (importance: number, cutoff: number) => {
    const colorScale = interpolateRgb(
      "rgba(255, 204, 51, 0)",
      "rgba(255, 204, 51, 1)",
    );
    const normalizedImportance = (importance - cutoff) / (1 - cutoff);
    const backgroundColor =
      importance >= cutoff ? colorScale(normalizedImportance) : "transparent";
    // 하이라이팅 된 요소는 포커스 모드에서 영향을 받지 않도록 opacity 설정
    const baseOpacity = importance >= cutoff ? 1 : focus ? 0.2 : 1;

    return {
      backgroundColor: backgroundColor,
      color: "black",
      opacity: baseOpacity,
      transition: "opacity 0.3s ease",
      display: "inline",
    };
  };

  const processText = () => {
    const doc = nlp.readDoc(text);
    const sentences = doc.sentences().out(its.value);
    const sentenceWeights = sentenceWiseNormalizedWeights(doc, its);

    const cutoff = quantile(sentenceWeights, 1 - highlightPercentage / 100); // 하이라이팅 기준 설정

    return sentences.map((sentence, index) => {
      const importance = sentenceWeights[index];
      const style = highlightText(importance, cutoff);

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
                    if (focus && importance < cutoff)
                      e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    if (focus && importance < cutoff)
                      e.currentTarget.style.opacity = "0.2";
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
                      if (focus && importance < cutoff)
                        e.currentTarget.style.opacity = "1";
                    },
                    onMouseLeave: (e) => {
                      if (focus && importance < cutoff)
                        e.currentTarget.style.opacity = "0.2";
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

          return React.createElement(
            TagName,
            {
              key: i,
              style: style,
              onMouseEnter: (e) => {
                if (focus && importance < cutoff)
                  e.currentTarget.style.opacity = "1";
              },
              onMouseLeave: (e) => {
                if (focus && importance < cutoff)
                  e.currentTarget.style.opacity = "0.2";
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
                if (focus && importance < cutoff)
                  e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                if (focus && importance < cutoff)
                  e.currentTarget.style.opacity = "0.2";
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

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h1 style={{ fontSize: "24px", color: "#333" }}>Text Highlighter</h1>
      <textarea
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "20px",
          backgroundColor: "#fff",
          color: "#000",
        }}
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginRight: "10px" }}>Highlight Percentage:</label>
        <input
          type="range"
          min="0"
          max="100"
          value={highlightPercentage}
          onChange={(e) => setHighlightPercentage(Number(e.target.value))}
        />
        <span style={{ marginLeft: "10px" }}>{highlightPercentage}%</span>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>
          <input type="checkbox" checked={focus} onChange={handleFocusToggle} />
          Focus Mode
        </label>
      </div>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          lineHeight: "1.5",
        }}
        className="prose prose-basic"
      >
        {processText()}
      </div>
    </div>
  );
};

export default App;
