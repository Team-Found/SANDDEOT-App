import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "@renderer/components/Detail/Detail";
import { useLocation } from "react-router-dom";

export default function D4(): JSX.Element {
  const logcation = useLocation();
  const data = logcation.state;
  let { id } = useParams();
  return (
    <div className="flex w-full h-[calc(100dvh-2.5rem)] overflow-hidden flex-1 flex-grow">
      {/* <div className="prose prose-basic !max-w-full dark:prose-invert w-full">
        <iframe
        src="https://obtuse.kr"
        className="w-3/4 h-3/4 border-2 border-gray-300"
        title="Example Site"
      />
      </div> */}
      {data?.body && <Detail body={data.body} />}
    </div>
  );
}
