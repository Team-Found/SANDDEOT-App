// const fs = require("fs");
// const path = require("node:path");

// require("@babel/register")({
//   extensions: [".ts"],
//   presets: ["@babel/preset-typescript"],
// });

// const modulesDir = path.join(process.cwd(), "src/main/utils/db/modules");

// // 모듈 파일에서 import 문을 추출하는 함수
// function extractImports(filePath: string): string[] {
//   const moduleContent = fs.readFileSync(filePath, "utf-8");

//   const importRegex = /import\s+.*?\s+from\s+['"`](.*?)['"`];/g;
//   const imports: string[] = [];

//   let match;
//   while ((match = importRegex.exec(moduleContent)) !== null) {
//     imports.push(match[0]); // import 문을 배열에 추가
//   }

//   return imports;
// }

// // 함수 시그니처를 추출하는 함수
// function extractMethodSignatures(filePath: string): string {
//   const moduleContent = fs.readFileSync(filePath, "utf-8");

//   if (!moduleContent.includes("export default")) {
//     return "";
//   }
//   const exportDefaultRegex = /export\s+default\s+(\w+)/;
//   const functionName = exportDefaultRegex.exec(moduleContent)[1] as string;

//   // console.log(functionName);

//   // 템플릿 리터럴을 사용하여 정규표현식을 동적으로 생성합니다
//   const functionRegex = new RegExp(
//     `(${functionName})\\s*=\\s*(?:async\\s+)?\\(([\\s\\S]*?)\\)\\s*:\\s*([\\s\\S]*?)\\s*=>\\s*{([\\s\\S]*?)}`,
//     "g",
//   );

//   let match;
//   let methodsStr = "";

//   while ((match = functionRegex.exec(moduleContent)) !== null) {
//     const [, methodName, params, returnType] = match;
//     const formattedParams = params.trim().replace(/\s+/g, " ");
//     const formattedReturnType = returnType.trim();
//     methodsStr += `  ${methodName}(${formattedParams}): ${formattedReturnType};\n`;
//   }

//   return methodsStr;
// }

// // 배열에서 중복된 값을 제거하는 함수
// function removeDuplicates(arr: string[]): string[] {
//   const result: string[] = [];
//   for (const item of arr) {
//     if (result.indexOf(item) === -1) {
//       result.push(item);
//     }
//   }
//   return result;
// }

// // 인터페이스를 생성하는 함수
// function generateInterface(
//   directory: string,
//   parentPath: string[] = [],
// ): { interfaceStr: string; imports: string[] } {
//   let interfaceStr = "";
//   let imports: string[] = []; // import 문을 저장할 배열

//   fs.readdirSync(directory).forEach((file) => {
//     const fullPath = path.join(directory, file);
//     const stats = fs.statSync(fullPath);

//     if (stats.isDirectory()) {
//       interfaceStr += `${"  ".repeat(parentPath.length)}${file}: {\n`;
//       const result = generateInterface(fullPath, [...parentPath, file]);
//       interfaceStr += result.interfaceStr;
//       imports = imports.concat(result.imports); // 배열을 합쳐서 추가
//       interfaceStr += `${"  ".repeat(parentPath.length)}};\n`;
//     } else if (stats.isFile() && path.extname(fullPath) === ".ts") {
//       // const moduleName = path.basename(file, ".ts");
//       const methods = extractMethodSignatures(fullPath);
//       const fileImports = extractImports(fullPath);

//       // import 문 추가
//       imports = imports.concat(fileImports);

//       interfaceStr += `${"  ".repeat(parentPath.length)}${methods}\n`;
//     }
//   });

//   // 중복된 import 문 제거
//   imports = removeDuplicates(imports);

//   return { interfaceStr, imports };
// }

// // 인터페이스 정의 생성 및 파일에 저장
// const { interfaceStr, imports } = generateInterface(modulesDir);
// const outputFile = path.join(modulesDir, "../types/modules.d.ts");

// // import 문을 포함한 인터페이스 정의 생성
// const interfaceDefinition = `${imports.join("\n")}\ninterface Modules {\n${interfaceStr}}\n`;

// fs.writeFileSync(outputFile, interfaceDefinition, "utf-8");
// // console.log(`TypeScript interface generated at ${outputFile}`);

// // ----------------------------------------------

// import { Modules } from "./types/modules";

// const modules = {} as Modules;

// function functionToAnnymouseFunction(func: Function): Function {
//   return async function (...args: any[]) {
//     return func(...args);
//   };
// }
// // 모듈을 로드하는 함수
// async function loadModules(
//   directory: string,
//   parentObj: Partial<Modules>,
// ): Promise<void> {
//   const promises = fs.readdirSync(directory).map(async (file) => {
//     const fullPath = path.join(directory, file);
//     const stats = fs.statSync(fullPath);

//     if (stats.isDirectory()) {
//       parentObj[file] = {};
//       await loadModules(fullPath, parentObj[file]); // 재귀적으로 하위 디렉토리 탐색
//     } else if (stats.isFile() && path.extname(fullPath) === ".ts") {
//       // const moduleName = path.basename(file, ".ts");
//       const module = require(fullPath).default;
//       const moduleName = module.name;
//       parentObj[moduleName] = functionToAnnymouseFunction(module);
//       // parentObj[moduleName] = (): unknown => module();
//     }
//   });
//   await Promise.all(promises);
// }

// loadModules(modulesDir, modules).then(() => {
//   console.log(modules);
// });

// // 인터페이스를 export합니다
// // export default modules;
const RSSDel2 = (RSSID: number): Promise<void> => {
  const sql = `UPDATE RSS SET state = 1 WHERE RSSID = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [RSSID], (err) => {
      if (err) {
        console.error("SQL error10:", err.message);
        reject();
      } else {
        resolve();
      }
    });
  });
};
import db from "./db";
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
const insertRSSA = (bodyID: number, RSSID: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO RSSArticle (bodyID, RSSID) VALUES (?, ?)",
      [bodyID, RSSID],
      (err) => {
        if (err) {
          console.error("SQL error3:", err.message);
          reject();
        } else {
          console.log(`third success`);
          resolve(0);
        }
      },
    );
  });
};
const selectBodyID = (
  title: string,
  unixTime: number,
  body: string,
  translated: string,
  origin: number,
  author: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT bodyID FROM Body WHERE title = ? and date = ? and body = ? and translated = ? and origin = ? and author = ?",
      [title, unixTime, body, translated, origin, author],
      (err, row: { bodyID: number }) => {
        if (err) {
          console.error("SQL error2:", err.message);
          reject();
        } else {
          console.log(`second success`);
          resolve(row.bodyID);
        }
      },
    );
  });
};
import ArticleDetail from "./types/ArticleDetail";
import Article from "./types/Article";
interface count {
  RSSID: number;
}
import { RSS } from "./types/Rss";

export default {
  article: {
    del: (): Promise<void> => {
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
    },
    add: (
      title: string,
      date: Date,
      body: string,
      translated: string,
      origin: number,
      author: string,
      RSSID?: number,
    ): Promise<number> => {
      const sql =
        "INSERT INTO Body (title, date, body, translated, origin, author) VALUES (?, ?, ?, ?, ?, ?)";
      // console.log(body);
      // console.log(title);
      // console.log(date);
      const unixTime = Math.floor(date.getTime() / 1000);
      return new Promise((resolve, reject) => {
        db.run(
          sql,
          [title, unixTime, body, translated, origin, author],
          (err) => {
            if (err) {
              console.error("SQL error1:", err.message);
              reject();
            } else if (RSSID) {
              console.log(`success`);
              selectBodyID(
                title,
                unixTime,
                body,
                translated,
                origin,
                author,
              ).then((bodyID) => {
                insertRSSA(bodyID, RSSID).then(() => {
                  resolve(0);
                });
                resolve(0);
              });
            } else {
              resolve(0);
            }
          },
        );
      });
    },
    detail: (ArticleID: number): Promise<ArticleDetail> => {
      const sql = "SELECT * FROM RSSArticle WHERE ArticleID = ?";
      return new Promise((resolve, reject) => {
        db.get(sql, [ArticleID], (err, row: ArticleDetail) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else if (row) {
            // console.log("Article detail:", row);
            resolve(row);
          } else {
            console.log(`No article found with ArticleID ${ArticleID}`);
            reject();
          }
        });
      });
    },
    list: (
      startLevel: number = 1,
      endLevel: number = 6,
      categoryID?: number,
    ): Promise<Article[]> => {
      const sql = `SELECT title, author, level, progress, image FROM Body WHERE level between ? and ? ${categoryID ? `and categoryID = ?` : ``}`;
      return new Promise((resolve, reject) => {
        db.all(
          sql,
          [startLevel, endLevel, categoryID],
          (err, rows: Article[]) => {
            if (err) {
              console.error("SQL error:", err.message);
              reject();
            } else if (rows) {
              resolve(rows);
            } else {
              console.log(
                `No article found with ${startLevel}, ${endLevel}, ${categoryID}`,
              );
              reject();
            }
          },
        );
      });
    },
    remove: (bodyID: number): Promise<number> => {
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
    },
    update: (
      bodyID: number,
      option: {
        title?: string;
        body?: string;
        image?: Blob;
        translated?: string;
        feedback?: string;
        score?: number;
        editDate?: Date;
        IMPP?: string;
        level?: number;
      },
    ): Promise<number> => {
      const sql = `UPDATE Body SET ${Object.keys(option).map((key) =>
        key ? `${key} = ?` : "",
      )} WHERE bodyID = ?`;

      // const sql = `UPDATE Body SET bodyID = ?, title = `;
      return new Promise((resolve, reject) => {
        db.run(
          sql,
          [
            ...Object.values(option).filter(
              (item) => item !== undefined && item !== null,
            ),
            bodyID,
          ],
          (err) => {
            if (err) {
              console.error("SQL error:", err.message);
              reject();
            } else {
              console.log(`success`);
              resolve(0);
            }
          },
        );
      });
    },
    count: (): Promise<count[]> => {
      const sql =
        "SELECT RSS.RSSID FROM RSSArticle, RSS WHERE RSS.RSSID = RSSArticle.RSSID AND state = 0 GROUP BY RSS.RSSID";
      return new Promise((resolve, reject) => {
        db.all(sql, (err, rows: count[]) => {
          if (err) {
            console.error("SQL error c: ", err.message);
            reject();
          } else if (rows) {
            // console.log("Article detail:", rows);
            resolve(rows);
          } else {
            console.log(`카운트 실패`);
            reject();
          }
        });
      });
    },
    rssArticleList: (): Promise<Article[]> => {
      const sql = `SELECT articleID, RSSID, title, date, body, saved, description FROM RSSArticle WHERE RSSID IN (SELECT RSSID FROM RSS WHERE state = 0) ORDER BY date DESC`;
      return new Promise((resolve, reject) => {
        db.all(sql, (err, rows: Article[]) => {
          if (err) {
            console.error("SQL error 4:", err.message);
            reject();
          } else if (rows) {
            resolve(rows);
          } else {
            console.log(`No article found`);
            reject();
          }
        });
      });
    },
    RSSDetail: async (RSSID: number): Promise<RSS> => {
      const sql = `
        SELECT *
        FROM RSS
        WHERE RSSID = ?
      `;
      return new Promise((resolve, reject) => {
        db.all(sql, [RSSID], (err, row: RSS) => {
          if (err) {
            console.error("SQL error5:", err.message);
            reject();
          } else {
            resolve(row);
          }
        });
      });
    },
    rssStateUp: (RSSURL: string): Promise<void> => {
      const sql = `UPDATE RSS SET state = 0 WHERE RSSURL = ?`;
      return new Promise((resolve, reject) => {
        db.run(sql, [RSSURL], (err) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else {
            resolve();
          }
        });
      });
    },
    save: (articleID: number, saved: number): Promise<void> => {
      const sql = `UPDATE RSSArticle SET saved = ? WHERE articleID = ?`;
      return new Promise((resolve, reject) => {
        db.run(sql, [saved, articleID], (err) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else {
            console.log(`update success`);
            resolve();
          }
        });
      });
    },
    detail3: (articleID: number): Promise<ArticleDetail> => {
      const sql = "SELECT * FROM RSSArticle WHERE articleID = ?";
      return new Promise((resolve, reject) => {
        db.get(sql, [articleID], (err, row: ArticleDetail) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else if (row) {
            // console.log("Article detail:", row);
            resolve(row);
          } else {
            console.log(`No article found with ArticleID ${articleID}`);
            reject();
          }
        });
      });
    },
    savedArticleList: (): Promise<Article[]> => {
      const sql = `SELECT articleID, RSSID, title, date, body, saved, description, duration FROM RSSArticle WHERE saved = 1`;
      return new Promise((resolve, reject) => {
        db.all(sql, (err, rows: Article[]) => {
          if (err) {
            console.error("SQL error6:", err.message);
            reject();
          } else if (rows) {
            resolve(rows);
          } else {
            console.log(`No article found`);
            reject();
          }
        });
      });
    },
    selectRSS: (RSSURL: string): Promise<number> => {
      const sql = "SELECT RSSID FROM RSS WHERE RSSURL = ?";
      return new Promise((resolve, reject) => {
        db.get(sql, [RSSURL], (err, row: number) => {
          if (err) {
            console.error("SQL error8:", err.message);
            reject();
          } else if (row) {
            // console.log("Article detail:", row);
            resolve(row);
          } else {
            console.log(`No article found with RSSID.`);
            reject();
          }
        });
      });
    },
    threadSelect: (articleID: number): Promise<string | null> => {
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
    },
    threadUpdate: (threadID: string, articleID: number): Promise<void> => {
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
    },
    RSSArticleDel: (RSSID: number): Promise<void> => {
      const sql = `DELETE FROM RSSArticle WHERE RSSID = ? AND saved = 0`;
      return new Promise((resolve, reject) => {
        db.run(sql, [RSSID], (err) => {
          if (err) {
            console.error("SQL error9:", err.message);
            reject();
          } else {
            console.log("Article Del Succese");
            RSSDel2(RSSID).then(() => {
              resolve();
            });
          }
        });
      });
    },
    addUserArticle: async (
      title: string,
      date: Date,
      body: string,
    ): Promise<void> => {
      const query = `
        INSERT INTO UserArticle (title, date, body)
        VALUES (?, ?, ?)
      `;
      const unixTime = Math.floor(date.getTime() / 1000);
      return new Promise((resolve, reject) => {
        db.run(query, [title, unixTime, body], (err) => {
          if (err) {
            console.error("SQL error3??:", err.message);
            reject();
          } else {
            console.log(`글 생성 성공`);
            resolve();
          }
        });
      });
    },
    detail2: (articleID: number): Promise<ArticleDetail> => {
      const sql = "SELECT * FROM UserArticle WHERE articleID = ?";
      return new Promise((resolve, reject) => {
        db.get(sql, [articleID], (err, row: ArticleDetail) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else if (row) {
            // console.log("Article detail:", row);
            resolve(row);
          } else {
            console.log(`No article found with ArticleID ${articleID}`);
            reject();
          }
        });
      });
    },
    userArticleList: (): Promise<Article[]> => {
      const sql = `SELECT articleID, title, date, body FROM UserArticle`;
      return new Promise((resolve, reject) => {
        db.all(sql, (err, rows: Article[]) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else if (rows) {
            resolve(rows);
          } else {
            console.log(`No article found`);
            reject();
          }
        });
      });
    },
  },
  rss: {
    article: {
      add: async (
        articleID: number,
        RSSID: number,
        title: string,
        date: Date,
        description?: string,
        body?: string,
        threadID?: null | string,
      ): Promise<void> => {
        const query = `
          INSERT INTO RSSArticle (articleID, RSSID, title, date, body, threadID, description)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        return new Promise((resolve, reject) => {
          db.run(
            query,
            [articleID, RSSID, title, date, body, threadID, description],
            (err) => {
              if (err) {
                console.error("SQL error3:", err.message);
                reject();
              } else {
                console.log(`글 생성 성공`);
                resolve();
              }
            },
          );
        });
      },
      updateDuration: async (
        articleID: number,
        duration: number, //sec
      ): Promise<void> => {
        const query = `
          UPDATE RSSArticle SET duration = duration + ? WHERE articleID = ?
        `;
        return new Promise((resolve, reject) => {
          db.run(query, [duration, articleID], (err) => {
            if (err) {
              console.error("SQL error3ef13b:", err.message);
              reject();
            } else {
              console.log(`duration 업데이트 성공`);
              resolve();
            }
          });
        });
      },
    },
    lastUpdate: (): Promise<Date> => {
      const sql = "SELECT MAX(date) as date FROM RSSArticle";
      return new Promise((resolve) => {
        db.get(sql, (err, row: { date: number }) => {
          if (err) {
            console.error("SQL error:", err.message);
            resolve(new Date(1970, 1, 1));
          }
          resolve(new Date(row.date * 1000));
        });
      });
    },
    add: (rss: RSS): Promise<void> => {
      const sql =
        "INSERT INTO RSS (RSSID, RSSURL, RSSName, RSSImageUrl) VALUES (?, ?, ?, ?)";
      return new Promise((resolve, reject) => {
        db.run(
          sql,
          [rss.RSSID, rss.RSSURL, rss.RSSName, rss.RSSImageUrl],
          (err) => {
            if (err) {
              console.error("SQL error12:", err.message);
              reject();
            } else {
              resolve();
            }
          },
        );
      });
    },
    detail: async (
      RSSID: number,
    ): { RSSID: number; RSSURL: string; RSSName: string; RSSImage: string } => {
      const sql = `
        SELECT *
        FROM RSS
        WHERE RSSID = ?
      `;
      return new Promise((resolve, reject) => {
        db.all(sql, [RSSID], (err, rows) => {
          if (err) {
            console.error("SQL error13:", err.message);
            reject();
          } else {
            resolve(rows);
          }
        });
      });
    },
    edit: (
      RSSID: number,
      RSSURL?: string,
      RSSName?: string,
      RSSImageUrl?: string,
    ): Promise<void> => {
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
              console.error("SQL error14:", err.message);
              reject();
            } else {
              resolve();
            }
          },
        );
      });
    },
    list: (): Promise<RSS[]> => {
      return new Promise((resolve, reject) => {
        db.all("SELECT * FROM RSS WHERE state = 0", (err, rows: RSS[]) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else {
            resolve(rows.slice(1));
          }
        });
      });
    },
    remove: (RSSID: number): Promise<void> => {
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
    },
    urlToId: (url: string): Promise<number> => {
      const sql = `SELECT RSSID FROM RSS WHERE RSSURL = ?`;
      return new Promise((resolve, reject) => {
        db.get(sql, [url], (err, row: { RSSID: number }) => {
          if (err) {
            console.error("SQL error:", err.message);
            reject();
          } else {
            resolve(row.RSSID);
          }
        });
      });
    },
  },
};
