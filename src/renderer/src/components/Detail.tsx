import React, { useState } from "react";
import { Controls } from "./Controls";
import Wink from "./Wink";

const App: React.FC<{ body: string }> = ({ body }) => {
  const [highlightPercentage, setHighlightPercentage] = useState<number>(20);
  const [focus, setFocus] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-[1fr_auto] h-screen">
      <Wink
        body={body}
        highlightPercentage={highlightPercentage}
        focus={focus}
        showControls={showControls}
      />
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
