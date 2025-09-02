export type rawArticle = {
  rssID: number;
  title: string;
  description: string;
  summary: string;
  date: number;
  content: { value: string }[];
  link: string;
  media_thumbnail: any;
};
