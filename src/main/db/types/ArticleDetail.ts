export default interface ArticleDetail {
  bodyID: number;
  title: string;
  body: string;
  progress: number;
  date: number;
  translated: string;
  origin: number;
  image: string | null;
  feedback: string | null;
  score: number | null;
  editDate: number | null;
  IMPP: number | null;
  categoryID: number;
  level: number;
  author: string;
}
