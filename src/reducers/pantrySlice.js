import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPantry = createAsyncThunk("/pantry", async () => {
  try {
    const { data } = await axios.get("/api/pantry");
    return data;
  } catch (err) {
    return errmessage;
  }
});

const pantrySlice = createSlice({
  name: "pantry",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPantry.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default pantrySlice.reducer;
