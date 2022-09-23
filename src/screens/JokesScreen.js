import { View, Text } from 'react-native'
import React from 'react'
import Jokes from '../features/jokes/Jokes'
import { useSelector } from 'react-redux'


export const JokesScreen = () => {
  const {name, password} = useSelector(state => state.userReducer)

  return (
    <View>
      <Text> Hello {name}</Text>
      
      <Jokes />
      <Text>JokesScreen</Text>
    </View>
  )
}