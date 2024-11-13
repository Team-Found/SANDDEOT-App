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

interface ReRenderState {
  value: boolean;
}

const initialState2: ReRenderState = {
  value: false,
};

const reRender = createSlice({
  name: "reRender",
  initialState: initialState2,
  reducers: {
    setReRender: (state) => {
      state.value = !state.value;
    },
  },
});

// 스토어 구성
const store = configureStore({
  reducer: {
    textData: textData.reducer,
    pages: pages.reducer,
    reRender: reRender.reducer,
  },
});

// RootState 타입 정의
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// 액션 내보내기
export const { setTitle, setBody } = textData.actions;
export const { setNumber } = pages.actions;
export const { setReRender } = reRender.actions;

// 스토어 내보내기
export default store;
