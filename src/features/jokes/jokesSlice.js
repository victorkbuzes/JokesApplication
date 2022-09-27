
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const  JokesSlice = createSlice({
    name: "jokes", 
    initialState: {
        jokes: [],
        jokesCategory: [],
        jokesPerCategory: [],
       
    },
    reducers: {
        getJokes:(state, action) => {
            state.jokes = action.payload
         
        },
        getJokesCategory:(state, action) => {
            state.jokesCategory = action.payload
        },
        getJokesPerCategory: (state, action) => {
          state.jokesPerCategory = action.payload
        }
    },
    
});

export const JOKES_ACTION = JokesSlice.actions
export const JOKES_ACTION_CATEGORY = JokesSlice.actions
export const JOKES_ACTION_PER_CATEGORY = JokesSlice.actions




export const getJokes = () => {
    return async (dispatch)  => {
      fetch('https://api.chucknorris.io/jokes/random').then((response) => {
         
            if (response.ok) {
              return response.json();
            }
            throw new Error('Something went wrong');
          })
          .then(async (responseJson) => {
            console.log( "response json", responseJson);
            if (responseJson) {
                console.log("id called");
                dispatch(JOKES_ACTION.getJokes(responseJson));
                
                    try {
                        const jsonValue = JSON.stringify(responseJson)
                        await AsyncStorage.setItem('@storage_Key', jsonValue)
                        // alert("Data saved successfully")
    
                    } catch (e) {
                      throw new Error('Could not save data to storage key');
                        
                        
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

    }
}
export const getJokesCategory = () => {
  return async (dispatch) => { 
    axios({
      method: 'GET',
      url:'https://api.chucknorris.io/jokes/categories',
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json",

      },}).then((response) => {
      if(response.ok){

        console.log("category",response);
        return response.json();
      }
      throw new Error("Someting went wrong");


    })
    .then(async (responseJson) => {
      console.log(" category response json", responseJson);
      responseJson = responseJson.map((item,index)=>{
        return { value: item, label: item}


      })

      
      if (responseJson) {
        console.log("category id called");
        dispatch(JOKES_ACTION_CATEGORY.getJokesCategory(responseJson));
        
        try {
          const jsonValue = JSON.stringify(responseJson);
          await AsyncStorage.setItem('@category', jsonValue);
          // alert("Category Data saved successfully");
        } catch (e){
        } 
      }

    })
    .catch(async (error) => {
      try {
        const jsonValue = await AsyncStorage.getItem('@category')
        dispatch(jsonValue)
        console.log("get new category: " ,jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      
      } catch (e) {
     
      }
    

      
    });

  }

}
export const getJokesPerCategory = ( name ) => {
  return async (dispatch) => {

    fetch(`https://api.chucknorris.io/jokes/random?category=${name}`).then((response) => {

    if (response.ok) {
      console.log("jokesPerCategory", response);
      return response.json();
    }
    throw new Error("Something went wrong");

    })
    .then(async (responseJson) => {
      console.log("jokes per category", responseJson);
      if (responseJson) {
        console.log("jokes per category called");
        dispatch(JOKES_ACTION_PER_CATEGORY.getJokesPerCategory(responseJson));
        try {
          const jsonValue = JSON.stringify(responseJson);
          await AsyncStorage.setItem('@jokes_per_category', jsonValue);

        } catch (e) {


        }
      }
    })
    .catch( async (error) => {
      try {
        const jsonValue = await AsyncStorage.getItem('@jokes_per_category')
        dispatch(jsonValue)
        console.log("get jokes category", jsonValue);

        return jsonValue != null ? JSON.parse(jsonValue) : null;

      } catch (e) {
        console.log("error gettingularity", e);
      }
     

    });

  }

}







export default JokesSlice.reducer