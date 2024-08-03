const fs = require("fs");
const path = require("node:path");

require("@babel/register")({
  extensions: [".ts"],
  presets: ["@babel/preset-typescript"],
});

const modulesDir = path.join(process.cwd(), "src/main/db/modules");

// 모듈 파일에서 import 문을 추출하는 함수
function extractImports(filePath: string): string[] {
  const moduleContent = fs.readFileSync(filePath, "utf-8");

  const importRegex = /import\s+.*?\s+from\s+['"`](.*?)['"`];/g;
  const imports: string[] = [];

  let match;
  while ((match = importRegex.exec(moduleContent)) !== null) {
    imports.push(match[0]); // import 문을 배열에 추가
  }

  return imports;
}

// 함수 시그니처를 추출하는 함수
function extractMethodSignatures(filePath: string): string {
  const moduleContent = fs.readFileSync(filePath, "utf-8");

  if (!moduleContent.includes("export default")) {
    return "";
  }
  const exportDefaultRegex = /export\s+default\s+(\w+)/;
  const functionName = exportDefaultRegex.exec(moduleContent)[1] as string;

  // console.log(functionName);

  // 템플릿 리터럴을 사용하여 정규표현식을 동적으로 생성합니다
  const functionRegex = new RegExp(
    `(${functionName})\\s*=\\s*(?:async\\s+)?\\(([\\s\\S]*?)\\)\\s*:\\s*([\\s\\S]*?)\\s*=>\\s*{([\\s\\S]*?)}`,
    "g",
  );

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

// 배열에서 중복된 값을 제거하는 함수
function removeDuplicates(arr: string[]): string[] {
  const result: string[] = [];
  for (const item of arr) {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  }
  return result;
}

// 인터페이스를 생성하는 함수
function generateInterface(
  directory: string,
  parentPath: string[] = [],
): { interfaceStr: string; imports: string[] } {
  let interfaceStr = "";
  let imports: string[] = []; // import 문을 저장할 배열

  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      interfaceStr += `${"  ".repeat(parentPath.length)}${file}: {\n`;
      const result = generateInterface(fullPath, [...parentPath, file]);
      interfaceStr += result.interfaceStr;
      imports = imports.concat(result.imports); // 배열을 합쳐서 추가
      interfaceStr += `${"  ".repeat(parentPath.length)}};\n`;
    } else if (stats.isFile() && path.extname(fullPath) === ".ts") {
      // const moduleName = path.basename(file, ".ts");
      const methods = extractMethodSignatures(fullPath);
      const fileImports = extractImports(fullPath);

      // import 문 추가
      imports = imports.concat(fileImports);

      interfaceStr += `${"  ".repeat(parentPath.length)}${methods}\n`;
    }
  });

  // 중복된 import 문 제거
  imports = removeDuplicates(imports);

  return { interfaceStr, imports };
}

// 인터페이스 정의 생성 및 파일에 저장
const { interfaceStr, imports } = generateInterface(modulesDir);
const outputFile = path.join(modulesDir, "../types/modules.d.ts");

// import 문을 포함한 인터페이스 정의 생성
const interfaceDefinition = `${imports.join("\n")}\ninterface Modules {\n${interfaceStr}}\n`;

fs.writeFileSync(outputFile, interfaceDefinition, "utf-8");
// console.log(`TypeScript interface generated at ${outputFile}`);

// ----------------------------------------------

import { Modules } from "./types/modules";

const modules = {} as Modules;

// function functionToAnnymouseFunction(func: Function): Function {
//   return async function (...args: any[]) {
//     return func(...args);
//   };
// }

// 모듈을 로드하는 함수
async function loadModules(
  directory: string,
  parentObj: Partial<Modules>,
): Promise<void> {
  const promises = fs.readdirSync(directory).map(async (file) => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      parentObj[file] = {};
      await loadModules(fullPath, parentObj[file]); // 재귀적으로 하위 디렉토리 탐색
    } else if (stats.isFile() && path.extname(fullPath) === ".ts") {
      // const moduleName = path.basename(file, ".ts");
      const module = require(fullPath).default;
      const moduleName = module.name;
      // parentObj[moduleName] = functionToAnnymouseFunction(module);
      parentObj[moduleName] = (): unknown => module();
    }
  });
  await Promise.all(promises);
}

loadModules(modulesDir, modules).then(() => {
  console.log(modules);
});

// 인터페이스를 export합니다
export default modules;
