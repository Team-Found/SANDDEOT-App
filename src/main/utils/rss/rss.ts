import Parser from "rss-parser";
import { RSS } from "../db/types/Rss";
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
  console.log(rss.RSSURL);
  const feed = await parser.parseURL(rss.RSSURL);
  feed.items.forEach((item) => {
    item.RSSID = rss.RSSID;
  });
  return feed;
}

export async function getRssFeeds(rsss: RSS[]): Promise<Feed[]> {
  const feeds = await Promise.all(rsss.map((rss) => getRssFeed(rss)));
  return feeds;
}

export async function getRssFeedsItems(rsss: RSS[]): Promise<Parser.Item[]> {
  const feeds = await getRssFeeds(rsss);

  //order by time
  const items = feeds.flatMap((feed) => feed.items);
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
): Promise<Parser.Item[]> {
  const items = await getRssFeedsItems(rsss);
  return items.filter((item) => {
    return ISODatetoDate(item.isoDate) > datetime;
  });
}

const ISODatetoDate = (isoDate?: string): Date => {
  return new Date(isoDate ?? "");
};
const ISODatetoUnix = (isoDate: string): number => {
  return Math.floor(ISODatetoDate(isoDate).getTime() / 1000);
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
