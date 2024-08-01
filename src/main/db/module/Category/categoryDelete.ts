import db from "../../db";

const categoryDelete = (categoryID: number): Promise<number> => {
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

export default categoryDelete;
