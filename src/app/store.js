import { configureStore } from "@reduxjs/toolkit";
import JokesSlice  from "../features/jokes/jokesSlice";


export const store =configureStore({
    reducer: {
        JokesSlice
        

    }
})