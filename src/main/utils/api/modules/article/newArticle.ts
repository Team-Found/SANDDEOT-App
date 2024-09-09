import { apiServer } from "../../api";
import axios from "axios";
import db from "../../../db";

const dbApi = db;

interface rawArticle {
  rssID: number;
  title: string;
  description?: string;
  summary?: string;
  date: number;
  content: { value: string }[];
  link: string;
  media_thumbnail: string;
}

const newArticle = async (articles: rawArticle[]) => {
  const response = await axios.post(
    apiServer + "/article/newArticles/",
    {
      data: articles,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  response.data.result.map(
    async (result: {
      status: "success" | "fail";
      article: {
        articleID: number;
        rssID: number;
        title: string;
        description?: string;
        summary?: string;
        date: number;
        content: { value: string }[];
        link: string;
        media_thumbnail: string;
      };
    }) => {
      console.log(result);
      dbApi.rss.article.add(
        result.article.articleID,
        result.article.rssID,
        result.article.title,
        new Date(result.article.date),
        result.article.description || result.article.summary,
        result.article.content[0].value,
        null,
      );
    },
  );
  // console.log(response.data);
};

export default newArticle;

// test code
// newArticle([
//   {
//     rssID: 22,
//     title: "title",
//     description: "<h1>description</h1>",
//     date: 1234567890,
//     content: [{ value: "<h1>content</h1>" }],
//     link: "link",
//     media_thumbnail: "https://www.google.com/1",
//   },
//   {
//     rssID: 22,
//     title: "title2",
//     description: "<h1>description2</h1>",
//     date: 1234567890,
//     content: [{ value: "<h1>content2</h1>" }],
//     link: "link2",
//     media_thumbnail: "https://www.google.com/2",
//   },
//   {
//     rssID: 22,
//     title: "title3",
//     description: "<h1>description3</h1>",
//     date: 1234567890,
//     content: [{ value: "<h1>content3</h1>" }],
//     link: "link3",
//     media_thumbnail: "https://www.google.com/3",
//   },
// ]);
