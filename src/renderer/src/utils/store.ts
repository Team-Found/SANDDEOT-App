import { configureStore, createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
interface UserState {
  title: string;
  body: string;
  num: number;
}

const initialState: UserState = {
  title: "",
  body: "",
  num: 0,
};

// 슬라이스 생성
const textData = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setBody: (state, action) => {
      state.body = action.payload;
    },
  },
});

const pages = createSlice({
  name: "number",
  initialState,
  reducers: {
    setNumber: (state, action) => {
      state.num = action.payload;
    },
  },
});

// 스토어 구성
const store = configureStore({
  reducer: {
    textData: textData.reducer,
    pages: pages.reducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;

// 액션 내보내기
export const { setTitle, setBody } = textData.actions;
export const { setNumber } = pages.actions;

// 스토어 내보내기
export default store;
