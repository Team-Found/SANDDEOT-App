import Parser from "rss-parser";
import { RSS } from "../db/types/Rss";
import count from "../db/modules/article/count";

export type ItemWithRSSID = Parser.Item & {
  RSSID: number;
  description?: string;
  summary?: string;
  "media:thumbnail"?: { $: { url: string } };
  "media:content"?: any;
  "content:encoded"?: string;
};
// type CustomFeed = { foo: string };
// type CustomItem = { bar: number };

// const parser: Parser<CustomFeed, CustomItem> = new Parser({
//   customFields: {
//     feed: ["foo", "baz"],
//     //            ^ will error because `baz` is not a key of CustomFeed
//     item: ["bar"],
//   },
// });

const parser = new Parser({
  customFields: {
    item: ["description", "summary", "media:thumbnail", "media:content"],
  },
});

export type Feed = {
  [key: string]: any;
} & Parser.Output<{ [key: string]: any }>;

export async function getRssFeed(rss: RSS): Promise<Feed> {
  // console.log(rss.RSSURL);
  const feed = await parser.parseURL(rss.RSSURL);
  feed.items.forEach((item) => {
    (item as unknown as ItemWithRSSID).RSSID = rss.RSSID;
  });
  return feed;
}

export async function getRssFeeds(rsss: RSS[]): Promise<Feed[]> {
  const feeds = await Promise.all(rsss.map((rss) => getRssFeed(rss)));
  return feeds;
}

export async function getRssFeedsItems(rsss: RSS[]): Promise<ItemWithRSSID[]> {
  const feeds = await getRssFeeds(rsss);

  //order by time
  const items = feeds.flatMap((feed) =>
    feed.items.map((item) => {
      const itemWithRssId = item as unknown as ItemWithRSSID;
      rsss.map((item2) => {
        if (item2.RSSURL == feed.link) itemWithRssId.RSSID = item2.RSSID;
      });
      // item.RSSID = feed.link
      return itemWithRssId;
    }),
  );
  items.sort((a, b) => {
    return (
      new Date(b?.isoDate as string)?.getTime() -
      new Date(a?.isoDate as string)?.getTime()
    );
  });

  return items;
}

export async function getRssFeedsItemsAfterDatetime(
  rsss: RSS[],
  datetime: Date,
): Promise<ItemWithRSSID[]> {
  const items = await getRssFeedsItems(rsss);

  const already = await count();
  const alreadyIDs = already.map((item) => {
    return item.RSSID;
  });

  let RSSIDs = rsss.map((item) => {
    return item.RSSID;
  });

  RSSIDs = RSSIDs.filter((item) => {
    return !alreadyIDs.includes(item);
  });

  return items.filter((item) => {
    if (RSSIDs.includes(item.RSSID)) return true;
    return ISODatetoDate(item.isoDate) > datetime;
  });
}
const ISODatetoDate = (isoDate?: string): Date => {
  return new Date(isoDate ?? "");
};

// getRssFeedsItems([{
//   RSSID: 1,
//   RSSURL: "https://www.reddit.com/.rss",
//   RSSName: "Reddit",
//   RSSImageUrl: "https://www.reddit.com/favicon.ico",
// } as RSS]).then((items) => {
//   console.log(items);
// });

// getRssFeed("https://www.reddit.com/.rss").then((feed) => {
//   console.log(feed.title);
//   feed.items.forEach((item) => {
//     console.log(item.title + ":" + item.link);
//   });
// });
