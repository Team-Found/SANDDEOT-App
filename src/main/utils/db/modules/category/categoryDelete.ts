import db from "../../db";

const remove = (categoryID: number): Promise<number> => {
  const sql = `DELETE FROM Category WHERE categoryID = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [categoryID], (err) => {
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

export default remove;
