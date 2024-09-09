import db from "../../db";
// db.serialize(() => {
const threadSelect = (articleID: number): Promise<string | null> => {
  const sql = "SELECT threadID FROM RSSArticle WHERE articleID = ?";
  console.log(articleID);
  return new Promise((resolve, reject) => {
    db.get(sql, [articleID], (err, row: string | null) => {
      if (err) {
        console.error("SQL error1234:", err.message);
        reject();
      } else if (row) {
        console.log("스레드 아이디 select성공", row);
        resolve(row);
      } else {
        console.log(`threadID select실패`);
        reject();
      }
    });
  });
};
export default threadSelect;
