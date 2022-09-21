
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    },
    
});

export const JOKES_ACTION = JokesSlice.actions




export const getJokes = () => {
    return async (dispatch)  => {
        fetch('https://reactnative.dev/movies.json').then((response) => {
         
            if (response.ok) {
              return response.json();
            }
            throw new Error('Something went wrong');
          })
          .then(async (responseJson) => {
            console.log( "response json", responseJson);
            if (responseJson) {
                console.log("id called");
                dispatch(JOKES_ACTION.getJokes(responseJson.movies));
                
                    try {
                        const jsonValue = JSON.stringify(responseJson.movies)
                        await AsyncStorage.setItem('@storage_Key', jsonValue)
                        alert("Data saved successfully")
    
                    } catch (e) {
                        
                        
                    }

                    
                  }
            // Do something with the response
          })

          
          .catch(async (error) => {
                    
       
                console.log("else");
                try {
                    const jsonValue = await AsyncStorage.getItem('@storage_Key')
                    dispatch(jsonValue)
                    console.log("get new value: " , jsonValue);
                    return jsonValue != null ? JSON.parse(jsonValue) : null;
                  
                  } catch(e) {
                    console.log("if catch" , e);
                    // error reading value
                  }     
        
            // console.log(error)
          });






        // 
        // const res = await fetch('https://reactnative.dev/movies.json');
        // const json = await res.json();
        // const movies = json.movies;



     
      
   
        // console.log('jokes values', movies);
        // if (movies) {
        //     console.log("id called");
        //     dispatch(JOKES_ACTION.getJokes(movies));
            
        //         try {
        //             const jsonValue = JSON.stringify(movies)
        //             await AsyncStorage.setItem('@storage_Key', jsonValue)
        //             alert("Data saved successfully")

        //         } catch (e) {
                    
        //         }
                
        //       }
              
        //       else {
        //         console.log("else");
        //         try {
        //             const jsonValue = await AsyncStorage.getItem('@storage_Key')
        //             dispatch(jsonValue)
        //             return jsonValue != null ? JSON.parse(jsonValue) : null;
                  
        //           } catch(e) {
        //             // error reading value
        //           }     
        // }
    }
}
export const getJokesCategory = () => {

}




export default JokesSlice.reducer