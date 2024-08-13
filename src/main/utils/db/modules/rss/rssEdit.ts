import db from "../../db";

export function rssEdit(
  RSSID: number,
  RSSURL?: string,
  RSSName?: string,
  RSSImageUrl?: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(
      `UPDATE RSS SET ${RSSURL ? "RSSURL = ?," : ""} ${RSSName ? "RSSName = ?," : ""} ${RSSImageUrl ? "RSSImageUrl = ?," : ""} WHERE RSSID = ?`,
    );
    db.run(
      `UPDATE RSS SET ${RSSURL ? "RSSURL = ?" : ""}${RSSName ? ", RSSName = ?" : ""}${RSSImageUrl ? ", RSSImageUrl = ?" : ""} WHERE RSSID = ?`,
      [RSSURL, RSSName, RSSImageUrl, RSSID].filter((v) => {
        return v !== undefined;
      }),
      (err) => {
        if (err) {
          console.error("SQL error:", err.message);
          reject();
        } else {
          resolve();
        }
      },
    );
  });
}

//test code

// rssEdit(
//   2,
//   "https://rss.blog.naver.c312om/leedongeun.xml",
//   "이동은 블로그222",
//   "https://rss.blog123.naver.com/leedongeun.xml",
// );
