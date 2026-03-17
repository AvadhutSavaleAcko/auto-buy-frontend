import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface GlobalDataState {
  phone: string;
  pinCode: string;
}

const initialState: GlobalDataState = {
  phone: "",
  pinCode: "",
};

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    setGlobalData(
      state,
      action: PayloadAction<{ phone: string; pinCode: string }>
    ) {
      state.phone = action.payload.phone;
      state.pinCode = action.payload.pinCode;
    },
    clearGlobalData(state) {
      state.phone = "";
      state.pinCode = "";
    },
  },
});

export const { setGlobalData, clearGlobalData } = globalDataSlice.actions;

export default globalDataSlice.reducer;
