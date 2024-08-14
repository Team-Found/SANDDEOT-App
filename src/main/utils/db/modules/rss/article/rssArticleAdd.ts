import db from "../../../db";

const add = async (
  bodyID: number,
  RSSID: number,
  title: string,
  date: Date,
  body: string,
  chat: object,
  author: string,
): Promise<void> => {
  const query = `
    INSERT INTO rssArticles (articleID, RSSID, title, date, body, chat, author)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    db.run(query, [bodyID, RSSID, title, date, body, chat, author], (err) => {
      if (err) {
        console.error("SQL error3:", err.message);
        reject();
      } else {
        console.log(`글 생성 성공`);
        resolve();
      }
    });
  });
};

export default add;
