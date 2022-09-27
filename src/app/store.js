import AsyncStorage from "@react-native-async-storage/async-storage";
import {  configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from 'redux-persist';
import JokesSlice  from "../features/jokes/jokesSlice";
import  UserSlice  from "../features/user/userSlice";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  }

  const persistedReducer = persistReducer(persistConfig, JokesSlice)

export const store =configureStore({
    reducer: {
        jokesReducer:persistedReducer,
        userReducer: UserSlice
        

    }
})

export const persistor = persistStore(store)
