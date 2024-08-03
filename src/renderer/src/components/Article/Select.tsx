import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useEffect } from "react";

interface props {
  textCategoryID: number | undefined;
  setTextCategoryID: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export function SelectDemo(props: props): JSX.Element {
  const [categoryList, setCategoryList] = useState<
    Awaited<ReturnType<typeof window.dbApi.category.list>>
  >([]);

  useEffect(() => {
    window.dbApi.category.list().then((categories) => {
      setCategoryList(categories); // 상태 업데이트
    });
  }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시에만 실행

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
          {categoryList?.map((a, i) => (
            <span key={i}>
              <SelectItem value={String(a.categoryID)}>
                {a.categoryName}
              </SelectItem>
            </span>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
