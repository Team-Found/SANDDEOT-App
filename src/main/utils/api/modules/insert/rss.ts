import fetch from "electron-fetch";
import { apiServer } from "../../api";
import RssRes from "../../types/insert/rssRes";

export default async function insertRss(RSSUrl: string): Promise<RssRes> {
  const response = await fetch(apiServer + `/insert/rss/?domain=${RSSUrl}`);
  const data = (await response.json()) as RssRes;
  console.log(data);
  return data;
}
