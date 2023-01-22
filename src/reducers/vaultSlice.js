import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVault = createAsyncThunk("/vault", async () => {
  try {
    const { data } = await axios.get("/api/vault");
    return data;
  } catch (err) {
    return errmessage;
  }
});

const vaultSlice = createSlice({
  name: "vault",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchVault.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default vaultSlice.reducer;
