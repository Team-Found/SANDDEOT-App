import React, { useState } from "react";
import { Controls } from "./Controls";
import Wink from "./Wink";

const App: React.FC<{ body: string }> = ({ body }) => {
  const [highlightPercentage, setHighlightPercentage] = useState<number>(50);
  const [focus, setFocus] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full">
      <div className="prose prose-basic !max-w-full h-full dark:prose-invert w-full overflow-auto">
        <Wink
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
      />
    </div>
  );
};

export default App;
