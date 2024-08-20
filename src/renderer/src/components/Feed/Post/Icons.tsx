import { useState } from "react";

export function Mark({
  saved,
  articleID,
}: {
  saved: number;
  articleID: number;
}): JSX.Element {
  const [ren, setRen] = useState(false);
  const [saved1, setSaved1] = useState(saved);

  const dbUpdate = async (): Promise<void> => {
    await window.dbApi.article.save(articleID, saved1 == 0 ? 1 : 0);
    setSaved1(saved1 == 0 ? 1 : 0);
  };

  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        dbUpdate().then(() => {
          setRen(!ren);
        });
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_670_4432"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_670_4432)">
          <path
            d={
              saved1 == 1
                ? "M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21Z"
                : "M5 21V5C5 4.45 5.19583 3.97917 5.5875 3.5875C5.97917 3.19583 6.45 3 7 3H17C17.55 3 18.0208 3.19583 18.4125 3.5875C18.8042 3.97917 19 4.45 19 5V21L12 18L5 21ZM7 17.95L12 15.8L17 17.95V5H7V17.95Z"
            }
            fill="#E3E3E3"
          />
        </g>
      </svg>
    </div>
  );
}
