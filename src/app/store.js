import { configureStore } from "@reduxjs/toolkit";
import { keyboardSlice  } from "../features/keyboard/keyboardSlice";

export const store = configureStore({
    reducer: {
        keyboard: keyboardSlice.reducer,
    },
});