import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

interface props {
  textCategoryID: number | undefined;
  setTextCategoryID: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export function SelectDemo(props: props) {
  return (
    <Select
      onValueChange={(value: string) => {
        props.setTextCategoryID(Number(value));
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>카테고리</SelectLabel>
          <SelectItem value="1">사람</SelectItem>
          <SelectItem value="2">Banana</SelectItem>
          <SelectItem value="3">Blueberry</SelectItem>
          <SelectItem value="4">Grapes</SelectItem>
          <SelectItem value="5">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
