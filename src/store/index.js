/* Here is where you will configure the store

*/

import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../reducers/characterSlice";
import singleCharacterReducer from "../reducers/singleCharacterSlice";
import boilerReducer from "../reducers/boilerSlice";
import craftReducer from "../reducers/craftSlice";
import bulletinReducer from "../reducers/bulletinSlice";
import fishTankReducer from "../reducers/fishTankSlice";
import pantryReducer from "../reducers/pantrySlice";
import vaultReducer from "../reducers/vaultSlice";
export const store = configureStore({
  reducer: {
    characters: characterReducer,
    character: singleCharacterReducer,
    boiler: boilerReducer,
    craft: craftReducer,
    bulletin: bulletinReducer,
    fishTank: fishTankReducer,
    pantry: pantryReducer,
    vault: vaultReducer,
  },
});
