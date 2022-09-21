import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import { FlatList } from 'react-native-web';
import { getJokes } from './jokesSlice';

export default function Jokes() {
    const {jokes}  = useSelector(state => state.JokesSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJokes())

    }, []);

    // const handleRefresh = () => {
    //   dispatch(get)
     

    // }


  return (
    <View style={{ flex: 1, padding: 24 }}>
    
        <FlatList
          data={jokes}
          
          keyExtractor={(item, index) => index.toString()}
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
