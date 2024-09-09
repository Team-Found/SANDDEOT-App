export default interface ArticleDetail {
  articleID: number;
  RSSID: number;
  title: string;
  date: number;
  body?: string;
  description: string;
  threadID: string | null;
}
