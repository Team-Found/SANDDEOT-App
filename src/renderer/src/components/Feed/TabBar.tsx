export default function TabBar(): JSX.Element {
  return (
    <div className="flex w-full border-b-[1px] border-primaryBd">
      <div className="w-full flex justify-center align-middle py-2">추천</div>
      <div className="w-full flex justify-center align-middle py-2">팔로잉</div>
    </div>
  );
}
