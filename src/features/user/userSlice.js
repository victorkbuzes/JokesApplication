import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        name: '', 
       
    },
    reducers : {
        setUser : (state, action) => {
            console.log("action: " , action);
            state.name = action.payload?.name;  
        }
    }
})

export const userActions  = UserSlice.actions;
export default UserSlice.reducer;