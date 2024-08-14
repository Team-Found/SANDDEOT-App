import { useDispatch, useSelector } from "react-redux";
import { setNumber, RootState } from "../../utils/store";
import { Link, useNavigate } from "react-router-dom";

export default function TabBar(): JSX.Element {
  const dispatch = useDispatch();
  const num = useSelector((state: RootState) => state.pages.num);
  const navigate = useNavigate();
  return (
    <div className="flex w-full border-b-[1px] border-primaryBd">
      <div
        className={`w-full flex justify-center align-middle text-[0.9rem] py-4 ${!(num % 2) ? "font-bold" : null}`}
        onClick={() => {
          if (num < 2) {
            dispatch(setNumber(0));
            navigate("/");
          } else {
            dispatch(setNumber(2));
            navigate("/saved");
          }
        }}
      >
        {num < 2 ? "추천" : "저장된 글"}
      </div>
      <div
        className={`w-full flex justify-center align-middle text-[0.9rem] py-4 ${num % 2 ? "font-bold" : null}`}
        onClick={() => {
          if (num < 2) {
            dispatch(setNumber(1));
            navigate("/following");
          } else {
            dispatch(setNumber(3));
            navigate("/mine");
          }
        }}
      >
        {num < 2 ? "팔로잉" : "내 글"}
      </div>
    </div>
  );
}
