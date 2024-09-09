import db from "../../db";

const threadUpdate = (threadID: string, articleID: number): Promise<void> => {
  const sql = `UPDATE RSSArticle SET threadID = ? WHERE articleID = ?`;

  // const sql = `UPDATE Body SET bodyID = ?, title = `;
  return new Promise((resolve, reject) => {
    db.run(sql, [threadID, articleID], (err) => {
      if (err) {
        console.error("SQL error 스레드 업데이트 실패:", err.message);
        reject();
      } else {
        console.log(`스레드 업데이트 성공`);
        resolve();
      }
    });
  });
};
export default threadUpdate;
