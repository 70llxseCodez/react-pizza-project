import { configureStore } from "@reduxjs/toolkit";
import card from "./cardSlice";

export const store = configureStore({
    reducer:{
        card
    }
})


