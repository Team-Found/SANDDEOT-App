import db from "../../../db";

const add = async (
  articleID: number,
  RSSID: number,
  title: string,
  date: Date,
  body?: string,
  chat?: object = {},
  description: string,
): Promise<void> => {
  const query = `
    INSERT INTO RSSArticle (articleID, RSSID, title, date, body, chat, description)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    db.run(
      query,
      [articleID, RSSID, title, date, body, chat, description],
      (err) => {
        if (err) {
          console.error("SQL error3:", err.message);
          reject();
        } else {
          console.log(`글 생성 성공`);
          resolve();
        }
      },
    );
  });
};

export default add;
