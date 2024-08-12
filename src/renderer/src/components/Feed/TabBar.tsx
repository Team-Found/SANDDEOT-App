export default function TabBar(): JSX.Element {
  return (
    <div className="flex w-full border-b-[1px] py-4 border-primaryBd">
      <div className="w-full flex justify-center align-middle text-[0.9rem]">
        추천
      </div>
      <div className="w-full flex justify-center align-middle text-[0.9rem]">
        팔로잉
      </div>
    </div>
  );
}
