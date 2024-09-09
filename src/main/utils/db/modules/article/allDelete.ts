import db from "../../db";

const del = (): Promise<void> => {
  const sql = `DELETE FROM RSSArticle`;
  return new Promise((resolve, reject) => {
    db.run(sql, [], (err) => {
      if (err) {
        console.error("SQL error 삭제:", err.message);
        reject();
      } else {
        console.log("삭제 성공");
        rssDel().then(() => {
          me().then(() => {
            resolve();
          });
        });
      }
    });
  });
};

const rssDel = (): Promise<void> => {
  const sql = `DELETE FROM RSS`;
  return new Promise((resolve, reject) => {
    db.run(sql, [], (err) => {
      if (err) {
        console.error("SQL error 삭제:", err.message);
        reject();
      } else {
        console.log("삭제 성공");
        resolve();
      }
    });
  });
};

const me = (): Promise<void> => {
  const sql = `INSERT INTO RSS (RSSID, RSSURL, RSSName, RSSImageURL) VALUES(0,"#","나","")`;
  return new Promise((resolve, reject) => {
    db.run(sql, [], (err) => {
      if (err) {
        console.error("SQL error 삭제:", err.message);
        reject();
      } else {
        console.log("삭제 성공");
        resolve();
      }
    });
  });
};

export default del;
