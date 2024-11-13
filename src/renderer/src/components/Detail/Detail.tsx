import React, { useState, useEffect } from "react";
import { Controls } from "./Controls";
import Wink from "./Wink";

const App: React.FC<{
  body: string;
  title: string;
  threadID: string;
  articleID: number;
}> = ({ body, title, threadID, articleID }) => {
  const [highlightPercentage, setHighlightPercentage] = useState<number>(50);
  const [focus, setFocus] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [startTime] = useState<number>(Date.now());

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime) / 1000);

      if (duration > 0) {
        const readTimeData = {
          title,
          articleID,
          duration,
        };

        console.log("페이지 체류 데이터:", readTimeData);
        navigator.sendBeacon("YOUR_API_ENDPOINT", JSON.stringify(readTimeData));
      }
    };

    // 페이지를 떠날 때 이벤트
    window.addEventListener("beforeunload", handleBeforeUnload);

    // 라우트가 변경될 때도 체류시간 전송
    return () => {
      handleBeforeUnload();
      console.log("컴포넌트가 언마운트됨");
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [startTime, title, articleID]);

  return (
    <div className="flex h-full w-full dark:bg-[#0F0E0D]">
      <div className="prose prose-basic !max-w-full h-full dark:prose-invert w-full overflow-auto">
        <Wink
          articleTitle={title}
          body={body}
          highlightPercentage={highlightPercentage}
          focus={focus}
          showControls={showControls}
        />
      </div>
      <Controls
        highlightPercentage={highlightPercentage}
        setHighlightPercentage={setHighlightPercentage}
        focus={focus}
        setFocus={setFocus}
        showControls={showControls}
        setShowControls={setShowControls}
        threadID={threadID}
        articleID={articleID}
        body={body}
      />
    </div>
  );
};

export default App;
