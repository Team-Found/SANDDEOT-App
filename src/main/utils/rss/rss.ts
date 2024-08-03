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
