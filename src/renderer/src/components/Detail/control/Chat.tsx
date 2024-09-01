interface ChatProps {
  kind: boolean;
  content: string;
}

export default function Chat({ content, kind }: ChatProps) {
  return (
    <div
      className={`pl-1 justify-start items-start gap-1 inline-flex ${
        kind ? "text-[#A394A5]" : "text-[#766977]"
      }`}
    >
      <div className="text-toolSecondary text-sm font-extrabold leading-7">
        {kind ? "Q" : "A"}.
      </div>
      <div className="grow shrink basis-0 pl-1 pr-1.5 py-1.5 rounded shadow-inner justify-center items-center gap-2.5 flex">
        <div className="grow shrink basis-0 self-stretch text-toolSecondary text-sm font-normal leading-none">
          {content}
        </div>
      </div>
    </div>
  );
}
