import { useState } from "react";
import { SelectDemo } from "@components/Article/Select";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { setTitle, setBody, RootState } from "../../utils/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    console.log(categorys);
  });

  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.textData.title);
  const body = useSelector((state: RootState) => state.textData.body);
  const [textImage, setTextImage] = useState<File | null>(null);
  const [textCategoryID, setTextCategoryID] = useState<number>();
  const [author, setAuthor] = useState<string>("");
  return (
    <div>
      {/* <div className="text-3xl">하잉</div> */}
      <div>
        <div>
          <Label
            htmlFor="picture"
            className="rounded-md border-soild border border-[0 0% 14.9%]; pt-2 flex w-[300px] h-[30px] justify-center"
          >
            썸네일을 업로드 하세요.
          </Label>
          <input
            id="picture"
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setTextImage(e.target.files[0]);
              }
            }}
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
        <div className="flex w-100% justify-between">
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
