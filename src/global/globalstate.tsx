import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleState: false,
};

const GlobalState: any = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    changeState: (state, { payload }) => {
      state.toggleState = payload;
    },
  },
});

export const { changeState } = GlobalState.actions;

export default GlobalState.reducer;
