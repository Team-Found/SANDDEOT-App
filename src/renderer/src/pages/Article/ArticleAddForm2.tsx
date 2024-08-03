import { useState } from "react";
import { SelectDemo } from "@components/Article/Select";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { setTitle, setBody, RootState } from "../../utils/store";

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
    <>
      <div className="text-3xl">하잉</div>
      <div className="flex flex-col">
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setTextImage(e.target.files[0]);
            }
          }}
        ></input>
        <SelectDemo
          textCategoryID={textCategoryID}
          setTextCategoryID={setTextCategoryID}
        />{" "}
        <input
          type="text"
          placeholder="저자를 입력하세요."
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        ></input>
        <button
          className="bg-gray-300"
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
          확인
        </button>
      </div>
    </>
  );
};
