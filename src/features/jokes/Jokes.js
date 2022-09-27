import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import { getJokes } from './jokesSlice';


export default function Jokes() {
  const [refreshData, setRefreshData] = useState();
    const {jokes}  = useSelector(state => state.jokesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJokes())

    }, [refreshData]);

 


  return (
        <View style={{ flex: 1, padding: 24 , height: 300 }}>
          <Text style={styles.baseText} >The Joke is</Text>
          <Pressable  style= {styles.pressable} onPress={() => setRefreshData(!refreshData)}>
          <Text style={styles.text}>Refresh</Text>
          </Pressable>
        
          
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
    pressable: {
      backgroundColor:'#9C2C77',
      width: 200,
      height: 60,
      alignItems: 'center',
      borderRadius: 10,
      justifyContent: 'center',

    },

    text : {
      fontWeight : 'bold',
      fontSize: 20,
      color: 'white',

      padding:20,
      marginVertical: 10,
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
