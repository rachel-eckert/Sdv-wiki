import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("/characters", async () => {
  try {
    const { data } = await axios.get("/api/characters");
    return data;
  } catch (err) {
    return err.message;
  }
});

const characterSlice = createSlice({
  name: "characters",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const characterSelector = (state) => {
  return state.characters;
};

export default characterSlice.reducer;
