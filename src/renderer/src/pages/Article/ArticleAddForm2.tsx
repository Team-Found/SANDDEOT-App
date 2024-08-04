import { useState } from "react";
import { SelectDemo } from "@components/Article/Select";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { setTitle, setBody, RootState } from "../../utils/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FileUploadBtn from "../../components/Article/FileUploadBtn";
// import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import "./fileInput.css";
export function ButtonSecondary(): JSX.Element {
  return <Button variant="secondary">취소</Button>;
}

export function ButtonDemo(): JSX.Element {
  return <Button>확인</Button>;
}

export const FormDetail = (): JSX.Element => {
  window.dbApi.category.list().then((categorys) => {
    // console.log(categorys);
  });

  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.textData.title);
  const body = useSelector((state: RootState) => state.textData.body);
  const [textImage, setTextImage] = useState<File | null>(null);
  const [textCategoryID, setTextCategoryID] = useState<number>();
  const [author, setAuthor] = useState<string>("");
  return (
    <div className="flex justify-center items-center w-full h-full max-w-10 mx-auto">
      <div className="flex flex-col gap-2">
        <div>
          <FileUploadBtn></FileUploadBtn>
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
              if (textCategoryID) {
                window.dbApi.article.add(
                  title,
                  new Date(),
                  body,
                  "",
                  3,
                  textCategoryID,
                  author,
                  textImage,
                );
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
