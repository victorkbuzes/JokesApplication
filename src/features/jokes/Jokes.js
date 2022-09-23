import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import { FlatList } from 'react-native-web';
import { getJokes } from './jokesSlice';


export default function Jokes() {
    const {jokes}  = useSelector(state => state.jokesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJokes())

    }, []);

 


  return (
    <View style={{ flex: 1, padding: 24 }}>
    
        <FlatList
          data={jokes}
          
          keyExtractor={(_, index) => {
            return index.toString();
          }} 
          renderItem={({ item }) => (
            <Text key={item.key}> {item.id}{item.title} </Text>
       
          )}
        />
      
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


// const count = useSelector(state => state.counter.value)
// const dispatch = useDispatch()
