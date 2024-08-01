import db from "../../db";

const wordDelete = (wordID: number): Promise<number> => {
  const sql = `DELETE FROM Word WHERE wordID = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [wordID], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        console.log("success");
        resolve(0);
      }
    });
  });
};

export default wordDelete;
