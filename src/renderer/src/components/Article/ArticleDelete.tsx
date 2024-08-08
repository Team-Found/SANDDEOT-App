export default function ArticleDelete({
  bodyID,
  setDel,
  className,
}: {
  bodyID: number;
  setDel: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}): JSX.Element {
  return (
    <>
      <button
        className={className}
        onClick={(e) => {
          e.preventDefault();
          window.dbApi.article.remove(bodyID);
          setDel(true);
        }}
      >
        삭제
      </button>
    </>
  );
}
