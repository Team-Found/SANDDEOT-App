import { useEffect, useState } from "react";
import { RssBlock } from "./RssBlock";
import { useSelector } from "react-redux";

// import { setReRender } from "./../../../utils/store";

export default function FollowedRSSList(): JSX.Element {
  const [rssList, setRssList] = useState<
    Awaited<ReturnType<typeof window.dbApi.rss.list>>
  >([]);

  const reRenderValue = useSelector((state) => state.reRender.value);

  useEffect(() => {
    window.dbApi.rss.list().then((rows) => {
      setRssList(rows);
    });
  }, [reRenderValue]);
  console.log(rssList);
  return (
    <>
      {rssList.map((rss) => (
        <div key={rss.RSSID} className="w-full">
          <RssBlock
            RSSID={rss.RSSID}
            blogTitle={rss.RSSName}
            isFollowed={true}
            property1={true}
            imageUrl={rss.RSSImageURL}
          />
        </div>
      ))}
    </>
  );
}
