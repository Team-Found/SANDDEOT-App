import fetch from "electron-fetch";
import { apiServer } from "../api";

export default async function searchArticles(query: string) {
  const response = await fetch(`${apiServer}/search/rss/?target=${query}`);
  const data: [] = await response.json();
  return data;
}
