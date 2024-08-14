import { Link } from "react-router-dom";

export default function Article(): JSX.Element {
  return (
    <div>
      <Link to="./ocr" relative="path">
        <div className="flex items-center justify-center w-[200px] h-[200px] bg-red-500">
          <h1>OCR</h1>
        </div>
      </Link>
      <Link to="./input" relative="path">
        <div className="flex items-center justify-center w-[200px] h-[200px] bg-blue-500">
          <h1>input</h1>
        </div>
      </Link>
    </div>
  );
}
