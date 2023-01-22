import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBoiler = createAsyncThunk("/boiler", async () => {
  try {
    const { data } = await axios.get("/api/boiler");
    return data;
  } catch (err) {
    return errmessage;
  }
});

const boilerSlice = createSlice({
  name: "boiler",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBoiler.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default boilerSlice.reducer;
