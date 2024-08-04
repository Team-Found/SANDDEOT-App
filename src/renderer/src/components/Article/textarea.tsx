import React, { useState, KeyboardEvent } from "react";

const Textarea: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [rows, setRows] = useState<number>(5); // 기본 높이 (행 수)

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        // Shift + Enter는 줄바꿈
        event.preventDefault(); // 기본 Enter 동작 방지
        setText((prevText) => prevText + "\n");

        // 현재 rows 값에 1을 추가하여 높이 증가
        setRows((prevRows) => prevRows + 1);
      } else {
        // Enter는 전송
        event.preventDefault(); // 기본 Enter 동작 방지
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    alert("전송되었습니다: " + text);
  };

  return (
    <div>
      <textarea
        className="flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter text here"
        rows={5}
        cols={40}
      />
      <button onClick={handleSubmit}>전송</button>
    </div>
  );
};

export default Textarea;
