export function Mark({
  saved,
  articleID,
  reRender,
  setReRender,
}: {
  saved: number;
  articleID: number;
  reRender: boolean;
  setReRender: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const dbUpdate = (): Promise<void> => {
    return new Promise((resolve) => {
      window.dbApi.article.save(articleID, saved == 0 ? 1 : 0);
      resolve();
    });
  };

  const runFunction = async () => {
    await dbUpdate();
    setReRender(!reRender);
  };

  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        runFunction();
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
              saved == 1
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
