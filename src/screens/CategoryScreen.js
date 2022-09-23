import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJokesCategory } from '../features/jokes/jokesSlice'

export const CategoryScreen = () => {
  const {jokesCategory} = useSelector(state => state.jokesReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokesCategory())
  }, []);

  return (
    <View>
      <Text>Jokes CategoryScreen</Text>
      <Text> {jokesCategory.value} </Text>
      {/* <FlatList
       data={jokesCategory}

       keyExtractor={(item, index) => index.toString()}
       renderItem={({ item }) => {
        <Text> {item.value} {item.icon_url} </Text>

       

       }}
        /> */}
    </View>
  )
}