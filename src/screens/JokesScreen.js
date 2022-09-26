import { View, Text } from 'react-native'
import React from 'react'
import Jokes from '../features/jokes/Jokes'
import { useSelector } from 'react-redux'
import { JokesCategory } from '../features/jokes/JokesCategory'


export const JokesScreen = () => {
  const {name} = useSelector(state => state.userReducer)

  return (
    <View>
      <Text> Hello {name}</Text>
   
      
      <Jokes />
      
    </View>
  )
}

