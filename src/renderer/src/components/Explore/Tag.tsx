export default function Tag(color: string = "#f24baa"): JSX.Element {
  return (
    <div
      className={`text-white text-[8px] font-normal font-['Rozha One'] leading-[7.20px] bg-[${color}]`}
    >
      <div className="text-white text-[8px] font-normal font-['Rozha One'] leading-[7.20px]">
        <slot />
      </div>
    </div>
  );
}
