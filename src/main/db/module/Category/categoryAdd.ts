import db from "../../db";

const categoryAdd = (categoryName: string): Promise<number> => {
  const sql = "INSERT INTO Category (categoryName) VALUES (?)";
  return new Promise((resolve, reject) => {
    db.run(sql, [categoryName], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        console.log(`success`);
        resolve(0);
      }
    });
  });
};

export default categoryAdd;
