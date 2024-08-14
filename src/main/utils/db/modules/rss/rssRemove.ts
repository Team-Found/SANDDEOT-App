import db from "../../db";

const remove = (RSSID: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM RSS WHERE RSSID = ?", [RSSID], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        resolve();
      }
    });
  });
};
export default remove;

// test code

// rssRemove(2)
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("fail");
//   });
