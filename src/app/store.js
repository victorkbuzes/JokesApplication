import {  configureStore } from "@reduxjs/toolkit";
import JokesSlice  from "../features/jokes/jokesSlice";
import { UserSlice } from "../features/user/userSlice";






export const store =configureStore({
    reducer: {
        jokesReducer:JokesSlice,
        userReducer: UserSlice
        

    }
})
