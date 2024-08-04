import { useState } from "react";
import { SelectDemo } from "@components/Article/Select";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { setTitle, setBody, RootState } from "../../utils/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Buffer } from "buffer"; // 브라우저 환경에서 Buffer를 사용하기 위한 polyfill
import "./fileInput.css";

// 파일 업로드 버튼 컴포넌트 정의
function FileUploadBtn({
  setTextImage,
  setBinaryData,
  setBufferData,
}: {
  setTextImage: (file: File | null) => void;
  setBinaryData: (data: Uint8Array | null) => void;
  setBufferData: (data: Buffer | null) => void;
}): JSX.Element {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setTextImage(file);

      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target?.result) {
          const arrayBuffer = event.target.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);

          // Uint8Array를 Buffer로 변환
          const buffer = Buffer.from(uint8Array);

          // Uint8Array와 Buffer 데이터를 상태에 저장
          setBinaryData(uint8Array);
          setBufferData(buffer);

          // 변환된 Buffer 데이터를 로그로 출력
          console.log(buffer);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <Label
        htmlFor="picture"
        className="rounded-md border-solid border border-[0 0% 14.9%]; pt-2 flex w-[300px] h-[30px] justify-center"
      >
        썸네일을 업로드 하세요.
      </Label>
      <input id="picture" type="file" onChange={handleFileChange} />
    </>
  );
}

// 기타 버튼 컴포넌트
export function ButtonSecondary(): JSX.Element {
  return <Button variant="secondary">취소</Button>;
}

export function ButtonDemo(): JSX.Element {
  return <Button>확인</Button>;
}

// 메인 폼 컴포넌트
export const FormDetail = (): JSX.Element => {
  window.dbApi.category.list().then((categories) => {
    // console.log(categories);
  });

  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.textData.title);
  const body = useSelector((state: RootState) => state.textData.body);
  const [textImage, setTextImage] = useState<File | null>(null);
  const [textCategoryID, setTextCategoryID] = useState<number>();
  const [author, setAuthor] = useState<string>("");
  const [binaryData, setBinaryData] = useState<Uint8Array | null>(null);
  const [bufferData, setBufferData] = useState<Buffer | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full h-full max-w-10 mx-auto">
      <div className="flex flex-col gap-2">
        <div>
          <FileUploadBtn
            setTextImage={setTextImage}
            setBinaryData={setBinaryData}
            setBufferData={setBufferData}
          />
        </div>
        <SelectDemo
          textCategoryID={textCategoryID}
          setTextCategoryID={setTextCategoryID}
        />{" "}
        <Input
          type="text"
          placeholder="저자를 입력하세요."
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        ></Input>
        <div className="flex w-full justify-between">
          <Link to="../">
            <ButtonSecondary />
          </Link>
          <div
            onClick={() => {
              if (title && body && textCategoryID && author) {
                window.dbApi.article.add(
                  title,
                  new Date(),
                  body,
                  "",
                  3,
                  textCategoryID,
                  author,
                  bufferData, // bufferData를 사용하여 업로드
                );
                dispatch(setBody(""));
                dispatch(setTitle(""));
                navigate("../../");
              } else {
                alert("입력 정보를 다시 확인해주세요.");
              }
            }}
          >
            <ButtonDemo />
          </div>
        </div>
      </div>
    </div>
  );
};
