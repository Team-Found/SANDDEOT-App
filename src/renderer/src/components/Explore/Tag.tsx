import React from "react";

interface TagProps {
  children: React.ReactNode;
  color: string;
}

export default function Tag({
  children,
  color = "#f24baa",
}: TagProps): JSX.Element {
  return (
    <div
      className={`text-white text-[8px] font-normal font-['Rozha One'] leading-[7.20px] bg-[${color}] rounded-full px-1.5 py-1`}
    >
      <div className="text-white text-[8px] font-normal font-['Rozha One'] leading-[7.20px]">
        {children}
      </div>
    </div>
  );
}
