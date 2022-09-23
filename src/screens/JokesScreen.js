import { View, Text } from 'react-native'
import React from 'react'
import Jokes from '../features/jokes/Jokes'

export const JokesScreen = () => {
  return (
    <View>
      <Jokes />
      <Text>JokesScreen</Text>
    </View>
  )
}