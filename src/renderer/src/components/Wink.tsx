import React, { useState } from "react";
import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { quantile, interpolateRgb } from "d3";

// NLP 초기화
const nlp = winkNLP(model);
const its = nlp.its;

const Wink: React.FC = () => {
  const [text, setText] = useState<string>(
    "Children living in Japan’s hottest city will be given specially designed umbrellas to protect them from the heat, after a summer that saw record-breaking temperatures in many parts of the country.",
  );
  const [highlightPercentage, setHighlightPercentage] = useState<number>(20);

  // 문장별 중요도 계산 함수
  const sentenceWiseNormalizedWeights = (doc: any, its: any) => {
    return doc.out(its.sentenceWiseImportance).map((e: any) => e.importance);
  };

  const processText = () => {
    try {
      const doc = nlp.readDoc(text);
      const sentences = doc.sentences().out(its.value);
      const sentenceWeights = sentenceWiseNormalizedWeights(doc, its);

      console.log("Sentences:", sentences);
      console.log("Sentence Weights:", sentenceWeights);

      const cutoff = quantile(sentenceWeights, 1 - highlightPercentage / 100); // 하이라이팅 기준 설정
      const colorScale = interpolateRgb(
        "rgba(255, 204, 51, 0)",
        "rgba(255, 204, 51, 1)",
      );

      return sentences.map((sentence, index) => {
        const importance = sentenceWeights[index];
        const shouldHighlight = importance >= cutoff;
        const normalizedImportance = (importance - cutoff) / (1 - cutoff); // 중요도를 0~1 사이로 정규화
        const backgroundColor = shouldHighlight
          ? colorScale(normalizedImportance)
          : "transparent";
        const style = {
          backgroundColor: backgroundColor,
          color: "black", // 글자색 검정
          fontWeight: "normal", // bold 제거
        };

        return (
          <div key={index} style={{ marginBottom: "10px" }}>
            <span style={style}>{sentence}</span>
            <span style={{ color: "red", marginLeft: "10px" }}>
              Importance: {importance.toFixed(2)}
            </span>
          </div>
        );
      });
    } catch (error) {
      console.error("Processing failed:", error);
      return <span>Error processing text.</span>;
    }
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
      <div
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          lineHeight: "1.5",
        }}
      >
        {processText()}
      </div>
    </div>
  );
};

export default Wink;
