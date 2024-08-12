import { useDispatch, useSelector } from "react-redux";
import { setNumber, RootState } from "../../utils/store";

export default function TabBar(): JSX.Element {
  const dispatch = useDispatch();
  const num = useSelector((state: RootState) => state.pages.num);
  return (
    <div className="flex w-full border-b-[1px] py-4 border-primaryBd">
      <div
        className={`w-full flex justify-center align-middle text-[0.9rem] ${!(num % 2) ? "font-bold" : null}`}
        onClick={() => {
          if (num < 2) {
            dispatch(setNumber(0));
          } else {
            dispatch(setNumber(2));
          }
        }}
      >
        {num < 2 ? "추천" : "내 글"}
      </div>
      <div
        className={`w-full flex justify-center align-middle text-[0.9rem] ${num % 2 ? "font-bold" : null}`}
        onClick={() => {
          if (num < 2) {
            dispatch(setNumber(1));
          } else {
            dispatch(setNumber(3));
          }
        }}
      >
        {num < 2 ? "팔로잉" : "저장된 글"}
      </div>
    </div>
  );
}
