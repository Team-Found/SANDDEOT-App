import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

interface props {
  textCategoryID: number | undefined;
  setTextCategoryID: React.Dispatch<React.SetStateAction<number | undefined>>;
}

type category = {
  categoryID: number;
  categoryName: string;
};

export function SelectDemo(props: props) {
  let [categoryList, setCategoryList] = useState<category[]>();

  window.api.db.Category.categoryList().then((categorys) => {
    setCategoryList(categorys);
  });

  return (
    <Select
      onValueChange={(value: string) => {
        props.setTextCategoryID(Number(value));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="카테고리를 선택하세요!" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>카테고리</SelectLabel>
          {categoryList?.map((a) => (
            <SelectItem value={String(a.categoryID)}>
              {a.categoryName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
