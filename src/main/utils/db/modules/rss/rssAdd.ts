import db from "../../db";
import { RSS } from "../../types/Rss";

const add = (rss: RSS): Promise<void> => {
  const sql =
    "INSERT INTO RSS (RSSID, RSSURL, RSSName, RSSImageUrl) VALUES (?, ?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [rss.RSSID, rss.RSSURL, rss.RSSName, rss.RSSImageUrl],
      (err) => {
        if (err) {
          console.error("SQL error12:", err.message);
          reject();
        } else {
          resolve();
        }
      },
    );
  });
};

export default add;

// test code

// rssAdd({
//   RSSID: 2,
//   RSSURL: "https://rss.blog.naver.com/leedongeun.xml",
//   RSSName: "이동은 블로그",
//   RSSImageUrl: "https://rss.blog.naver.com/leedongeun.xml",
// })
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("fail");
//   });
