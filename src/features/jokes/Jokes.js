import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import { getJokes } from './jokesSlice';


export default function Jokes() {
    const {jokes}  = useSelector(state => state.jokesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJokes())

    }, []);

 


  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={styles.baseText}>{jokes.value}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

      
    },
    baseText : {
      fontWeight : 'bold',  
      height: 15,
      paddingTop: 40,
      fontSize: 20,
      color: '#06283D'
  
      
  },
 
  });


// const count = useSelector(state => state.counter.value)
// const dispatch = useDispatch()
