import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCharacter = createAsyncThunk(
  "characters/fetchSingleCharacter",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/characters/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const singleCharacterSlice = createSlice({
  name: "character",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleCharacter.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleCharacter = (state) => {
  return state.character;
};

export default singleCharacterSlice.reducer;
