import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { get_jokes } from './jokesSlice';
import { FlatList } from 'react-native-web';

export default function Jokes() {
    const {jokes}  = useSelector(state => state.JokesSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_jokes())

    }, []);


  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
    <Text style={{fontSize: 22}}>Posts</Text>
    <View style={{flex: 1, marginTop: 12}}>
        <FlatList
            data = {jokes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              return (
                <View>
                     <Text style={{fontSize: 22, paddingRight: 16}}>
                      {item.joke}
                    </Text>
                   
                  
                </View>
              )

            }}
            />
        
     
    </View>
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
