import db from "../../../db";

const updateDuration = async (
  articleID: number,
  duration: number, //sec
): Promise<void> => {
  const query = `
    UPDATE RSSArticle SET duration = duration + ? WHERE articleID = ?
  `;
  return new Promise((resolve, reject) => {
    db.run(query, [duration, articleID], (err) => {
      if (err) {
        console.error("SQL error3ef13b:", err.message);
        reject();
      } else {
        console.log(`duration 업데이트 성공`);
        resolve();
      }
    });
  });
};

export default updateDuration;
