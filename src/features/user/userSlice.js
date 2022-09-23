import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        password: ''
       
    },
    reducers : {
        setUser : (state, action) => {
            console.log("action: " , action);
            state.name = action.payload?.name;
            state.password = action.payload?.password;
            state.password = action.payload?.password;
            
        }
    }
})

export const {setUser } = UserSlice.actions;
export const selectUser = (state) => state?.user
export default UserSlice.reducer;