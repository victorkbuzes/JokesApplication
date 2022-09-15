import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import Jokes from '../features/jokes/Jokes';

export default function HomeScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false

    });
  })
  return (
    <SafeAreaView>
      <Jokes/>

    </SafeAreaView>
  
  )
}
