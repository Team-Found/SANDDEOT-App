import { apiServer } from "../../api";
import RssRes from "../../types/insert/rssRes";
import axios from "axios";

export default async function insertRss(RSSUrl: string): Promise<RssRes> {
  console.log("1234");
  const response = await axios.get(apiServer + `/rss/add/?domain=${RSSUrl}`);
  const data = response.data as RssRes;
  console.log(data);
  return data;
}
