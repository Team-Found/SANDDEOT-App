export default interface Article {
  articleID: number;
  RSSID: number;
  title: string;
  date: Date;
  body?: string;
  saved: number;
  description: string;
  duration: number;
}
