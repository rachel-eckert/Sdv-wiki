import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFishTank = createAsyncThunk("/fishtank", async () => {
  try {
    const { data } = await axios.get("/api/fishtank");
    return data;
  } catch (err) {
    return errmessage;
  }
});

const fishTankSlice = createSlice({
  name: "fish",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFishTank.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default fishTankSlice.reducer;
