import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBulletin = createAsyncThunk("/bulletin", async () => {
  try {
    const { data } = await axios.get("/api/bulletin");
    return data;
  } catch (err) {
    return errmessage;
  }
});

const bulletinSlice = createSlice({
  name: "bulletin",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBulletin.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default bulletinSlice.reducer;
