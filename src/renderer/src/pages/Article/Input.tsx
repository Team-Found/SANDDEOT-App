import { useState } from "react";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export const Input = (): JSX.Element => {
  let [textTitle, setTextTitle] = useState("");
  let [textBody, setTextBody] = useState("");
  let [textImage, setTextImage] = useState<File | null>(null);
  let [textCategoryID, setTextCategoryID] = useState();
  let [categoryView, setCategoryView] = useState(false);
  let [buttonValue, setButtonValue] = useState("");
  return (
    //title, date new Date(), body, translated '', origin 3, image, categoryID ???
    <>
      <div className="text-3xl">본문을 입력하세요</div>
      <div className="flex flex-col">
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setTextImage(e.target.files[0]);
            }
          }}
        ></input>
        <input
          placeholder="제목"
          type="text"
          onChange={(e) => {
            setTextTitle(e.target.value);
          }}
        ></input>
        <input
          placeholder="안녕하세요"
          type="text"
          onChange={(e) => {
            setTextBody(e.target.value);
          }}
        ></input>
        <SelectDemo />
        <button className="bg-gray-300" onClick={() => {}}>
          확인
        </button>
      </div>
    </>
  );
};
