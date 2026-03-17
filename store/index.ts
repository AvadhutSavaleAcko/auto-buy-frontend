import { configureStore } from "@reduxjs/toolkit";
import proposalReducer from "./slices/proposalSlice";
import globalDataReducer from "./slices/globalDataSlice";

export const store = configureStore({
  reducer: {
    proposal: proposalReducer,
    globalData: globalDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;