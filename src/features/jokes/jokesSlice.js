import { createSlice } from "@reduxjs/toolkit";

export const  JokesSlice = createSlice({
    name: "jokes", 
    initialState: {
        jokes: [],
    },
    reducers: {
        getJokes:(state, action) => {
            state.jokes = action.payload
        },
        getJokesCategory:(state, action) => {
            state.jokes = action.payload
        },
    }
    
});

export const JOKES_ACTION = JokesSlice.actions

export const get_jokes = () => {
    return async (dispatch) => {
        const res = await fetch('http://api.icndb.com/jokes/random');
        const json = await res.json();
        console.log('jokes', json);
        if (json) {
            dispatch(JOKES_ACTION.getJokes(json));
            
        } else {
            console.log('Unable to find jokes');
        }

    }



}

export default JokesSlice.reducer