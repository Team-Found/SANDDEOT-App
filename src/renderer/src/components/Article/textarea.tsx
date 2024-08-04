import React, { useState, KeyboardEvent } from "react";

const Textarea: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (event.shiftKey) {
        // Shift + Enter는 줄바꿈
        event.preventDefault();
        setText((prevText) => prevText + "\n");
      } else {
        // Enter는 전송
        event.preventDefault(); // 기본 Enter 동작 방지
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    alert("전송되었습니다: " + text);
    // 실제 전송 처리 코드 추가
    setText(""); // 전송 후 textarea 비우기
  };

  return (
    <div>
      <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
