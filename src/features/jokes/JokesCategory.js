import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  DropDownPicker from 'react-native-dropdown-picker' 
import { getJokesCategory, getJokesPerCategory } from './jokesSlice';

export const JokesCategory = () => {

  const [categoryvalue, setCategoryValue] = useState(null);
  const [open, setOpen] = useState(false);

    const { jokesCategory} = useSelector(state => state.jokesReducer);
    const { jokesPerCategory} = useSelector(state => state.jokesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJokesCategory())
    
    }, []);

    const handleChange =(name) => {
      dispatch(getJokesPerCategory(name))
      

    }
    useEffect(() => {
      if (categoryvalue) {
        dispatch(getJokesPerCategory(categoryvalue)) 
      }
    }, [categoryvalue]);
  return (
      <><DropDownPicker
      style={{
        alignItems: "center",
        justifyContent: "center"
      }}
      open={open}
      items={jokesCategory}
      setOpen={setOpen}
      setValue={setCategoryValue}
      setItems={categoryvalue} /><Text>{jokesPerCategory.value}</Text></>
     
  )

  
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
        

    },
    baseText : {
        fontWeight : 'bold',  
    
        height: 15,
        
        
    },
   

})

