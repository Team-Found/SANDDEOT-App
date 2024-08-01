import db from "../../db";

const articleDelete = (bodyID: number): Promise<number> => {
  const sql = `DELETE FROM Body WHERE bodyID = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [bodyID], (err) => {
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

articleDelete(4);

export default articleDelete;
