const fs = require("fs");
const path = require("path");
interface ModuleTree {
  [key: string]: any;
}
const modules: ModuleTree = {};
const modulesDir = path.join(process.cwd(), "src/main/db/module");

// 모듈을 로드하는 함수
function loadModules(directory: string, parentObj: any): void {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      parentObj[file] = {};
      loadModules(fullPath, parentObj[file]); // 재귀적으로 하위 디렉토리 탐색
    } else if (stats.isFile() && path.extname(fullPath) === ".ts") {
      const moduleName = path.basename(file, ".ts");
      parentObj[moduleName] = require(fullPath).default;
    }
  });
}

// 함수 시그니처를 추출하는 함수
function extractMethodSignatures(filePath: string): string {
  const moduleContent = fs.readFileSync(filePath, "utf-8");
  const functionRegex =
    /(\w+)\s*=\s*\(([\s\S]*?)\)\s*:\s*([\s\S]*?)\s*=>\s*{([\s\S]*?)};/g;
  let match;
  let methodsStr = "";

  while ((match = functionRegex.exec(moduleContent)) !== null) {
    const [, methodName, params, returnType] = match;
    const formattedParams = params.trim().replace(/\s+/g, " ");
    const formattedReturnType = returnType.trim();
    methodsStr += `  ${methodName}(${formattedParams}): ${formattedReturnType};\n`;
  }

  return methodsStr;
}

// 인터페이스를 생성하는 함수
function generateInterface(
  directory: string,
  parentPath: string[] = [],
): string {
  let interfaceStr = "";

  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      interfaceStr += `${"  ".repeat(parentPath.length)}${file}: {\n`;
      interfaceStr += generateInterface(fullPath, [...parentPath, file]);
      interfaceStr += `${"  ".repeat(parentPath.length)}};\n`;
    } else if (stats.isFile() && path.extname(fullPath) === ".ts") {
      const moduleName = path.basename(file, ".ts");
      const methods = extractMethodSignatures(fullPath);
      interfaceStr += `${"  ".repeat(parentPath.length)}${moduleName}: {\n${methods}}\n`;
    }
  });

  return interfaceStr;
}

// const modules = {};
loadModules(modulesDir, modules);

// const interfaceDefinition = `interface Modules {\n${generateInterface(modulesDir)}}\n`;
console.log(generateInterface(modulesDir));
console.log(modules);
// 인터페이스를 export합니다
export default modules;

// 모든 모듈을 사용해보기
// function executeModules(obj, functionName): void {
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "function") {
//       console.log(`Executing ${functionName}`);
//       obj[key]();
//     } else {
//       executeModules(
//         obj[key],
//         typeof obj[key].default == "function" ? key : functionName,
//       );
//     }
//   });
// }

// executeModules(modules, "excute");

// export default modules;

// import articleDetail from "./module/Article/articleDetail";
// import articleList from "./module/Article/articleList";
// import articleAdd from "./module/Article/articleAdd";
// import articleUpdate from "./module/Article/articleUpdate";
// import articleDelete from "./module/Article/articleDelete";
// import learnAnalytics from "./module/Learn/learnAnalytics";
// import learnEdit from "./module/Learn/learnEdit";
// import learnAdd from "./module/Learn/learnAdd";
// import wordAdd from "./module/Word/wordAdd";
// import wordList from "./module/Word/wordList";
// import wordDelete from "./module/Word/wordDelete";
// import categoryList from "./module/Category/categoryList";
// import categoryAdd from "./module/Category/categoryAdd";
// import categoryDelete from "./module/Category/categoryDelete";

// export default {
//   article: {
//     articleDetail,
//     articleList,
//     articleAdd,
//     articleUpdate,
//     articleDelete,
//   },
//   learn: {
//     learnAnalytics,
//     learnEdit,
//     learnAdd,
//   },
//   word: {
//     wordAdd,
//     wordList,
//     wordDelete,
//   },
//   category: {
//     categoryList,
//     categoryAdd,
//     categoryDelete,
//   },
// };
