import { useEffect, useState } from "react";
import { RssBlock } from "./RssBlock";
export default function FollowedRSSList({
  reRender,
  setReRender,
}: {
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const [rssList, setRssList] = useState<
    Awaited<ReturnType<typeof window.dbApi.rss.list>>
  >([]);
  useEffect(() => {
    window.dbApi.rss.list().then((rows) => {
      setRssList(rows);
      console.log(rows);
      console.log("hi");
    });
  }, [reRender]);
  return (
    <>
      {rssList.map((rss) => (
        <div key={rss.RSSID} className="w-full">
          <RssBlock
            RSSID={rss.RSSID}
            blogTitle={rss.RSSName}
            followProperty1="variant-2"
            property1="default"
            imageUri={rss.RSSImageURL}
            reRender={reRender}
            setReRender={setReRender}
          />
        </div>
      ))}
    </>
  );
}
