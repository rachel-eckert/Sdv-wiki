import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCraft = createAsyncThunk("/craft", async () => {
  try {
    const { data } = await axios.get("/api/craft");
    return data;
  } catch (err) {
    return errmessage;
  }
});

const craftSlice = createSlice({
  name: "craft",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCraft.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default craftSlice.reducer;
