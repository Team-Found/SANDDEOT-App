import Tag from "./Tag";

export default function SearchResult(props: {
  title: string;
  author: string;
  level: number;
  tags: string[];
  imageURL: string;
  url: string;
}): JSX.Element {
  const { title, author, level, tags, imageURL, url } = props;
  return (
    <a
      href={url}
      className="w-full px-3.5 py-4 bg-[#1b1918] rounded-4xl justify-center items-center gap-3.5 inline-flex"
    >
      <img
        className="w-[84px] h-full object-cover self-stretch rounded-xl"
        src={imageURL}
      />
      <div className="grow shrink basis-0 self-stretch relative">
        <div className="text-2xl font-normal font-['Rozha One'] leading-tight">
          {title}
        </div>
        <div className="text-[#eaeaea] text-xs font-medium font-['Pretendard Variable']">
          By {author}
        </div>
        <div className="flex">
          {tags.map((tag) => (
            <Tag key={tag} color="#f24baa">
              {tag}
            </Tag>
          ))}
          <Tag color="#000">Level {level}</Tag>
        </div>
      </div>
    </a>
  );
}
