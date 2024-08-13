import { useEffect, useState } from "react";
import { RssBlock } from "../RssBlock";
export default function FollowedRSSList(): JSX.Element {
  const [rssList, setRssList] = useState([]);
  useEffect(() => {
    window.dbApi.rss.list().then((rows) => {
      setRssList(rows);
      console.log(rows);
    });
  }, []);
  return (
    <>
      <RssBlock
        blogTitle="Obtuse의 테크 블로그"
        // divClassName="!text-variable-collection-primarytext"
        followProperty1="variant-2"
        property1="default"
      />
    </>
  );
}
