import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferredLanguage: "en",
  },
  reducers: {
    addPreferredLanguage: (state, action) => {
      state.preferredLanguage = action.payload;
    },
  },
});

export const { addPreferredLanguage } = configSlice.actions;

export default configSlice.reducer;
