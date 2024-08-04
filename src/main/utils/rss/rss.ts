import Parser from "rss-parser";

// type CustomFeed = { foo: string };
// type CustomItem = { bar: number };

// const parser: Parser<CustomFeed, CustomItem> = new Parser({
//   customFields: {
//     feed: ["foo", "baz"],
//     //            ^ will error because `baz` is not a key of CustomFeed
//     item: ["bar"],
//   },
// });

const parser = new Parser();

export type Feed = {
  [key: string]: any;
} & Parser.Output<{ [key: string]: any }>;

export async function getRssFeed(url: string): Promise<Feed> {
  const feed = await parser.parseURL(url);
  return feed;
}

export async function getRssFeeds(urls: string[]): Promise<Feed[]> {
  const feeds = await Promise.all(urls.map((url) => getRssFeed(url)));
  return feeds;
}

export async function getRssFeedsItems(urls: string[]): Promise<Parser.Item[]> {
  const feeds = await getRssFeeds(urls);

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

getRssFeedsItems(["https://www.reddit.com/.rss"]).then((items) => {
  console.log(items);
});

// getRssFeed("https://www.reddit.com/.rss").then((feed) => {
//   console.log(feed.title);
//   feed.items.forEach((item) => {
//     console.log(item.title + ":" + item.link);
//   });
// });
