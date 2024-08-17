import React, { useState, useEffect } from "react";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { interpolateRgb } from "d3";

// NLP 초기화
const nlp = winkNLP(model);
const its = nlp.its;

const Wink: React.FC<{
  body: string;
  highlightPercentage: number;
  focus: boolean;
  showControls: boolean;
}> = ({ body, highlightPercentage, focus, showControls }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(body);
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
    console.log(
      colorScale(normalizedImportance).split(",")[3]?.split(")")[0],
      colorScale(normalizedImportance),
    );
    const backgroundColor =
      isHighlightActive &&
      colorScale(normalizedImportance).split(",")[3]?.split(")")[0] > 0.3
        ? colorScale(normalizedImportance)
        : "transparent";

    const baseOpacity =
      focus &&
      !(
        isHighlightActive &&
        colorScale(normalizedImportance).split(",")[3]?.split(")")[0] > 0.3
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

  const processText = () => {
    const doc = nlp.readDoc(text);
    const sentences = doc.sentences().out(its.value);
    const sentenceWeights = sentenceWiseNormalizedWeights(doc, its);

    const maxImportance = Math.max(...sentenceWeights);

    return sentences.map((sentence, index) => {
      const importance = sentenceWeights[index];
      const style = highlightText(importance, maxImportance);

      const parser = new DOMParser();
      const docFragment = parser.parseFromString(sentence, "text/html");
      const elements = Array.from(docFragment.body.childNodes);

      return elements.map((element, i) => {
        if (element.nodeType === Node.ELEMENT_NODE) {
          const TagName = (element as HTMLElement).tagName.toLowerCase();
          console.log(style.backgroundColor);
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
                    style.backgroundColor == "transparent"
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
              return React.cloneElement(
                React.createElement(
                  (child as HTMLElement).tagName.toLowerCase(),
                  {
                    key: j,
                    style: style,
                    onMouseEnter: (e) => {
                      if (focus) e.currentTarget.style.opacity = "1";
                    },
                    onMouseLeave:
                      style.backgroundColor == "transparent"
                        ? (e) => {
                            if (focus) e.currentTarget.style.opacity = "0.2";
                          }
                        : (e) => {
                            e.currentTarget.style.opacity = "1";
                          },
                  },
                ),
                undefined,
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
              style: { display: "block" },
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
                style.backgroundColor == "transparent"
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
    });
  };

  return (
    <div className="prose prose-basic dark:prose-invert !max-w-full w-full flex-grow overflow-y-auto h-full">
      {processText()}
    </div>
  );
};

export default Wink;
