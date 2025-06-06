import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gpttoggle: false,
  },
  reducers: {
    togglinggpt: (state) => {
      state.gpttoggle = !state.gpttoggle;
    },
  },
});

export const { togglinggpt } = gptSlice.actions;

export default gptSlice.reducer;
