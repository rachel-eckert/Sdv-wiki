/* Here is where you will configure the store

*/

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../reducers/characterSlice";
import singleCharacterReducer from "../reducers/singleCharacterSlice";
export const store = configureStore({
  reducer: {
    characters: characterReducer,
    character: singleCharacterReducer,
  },
});
