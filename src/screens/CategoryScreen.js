import { View, Text } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'

export default function CategoryScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false

    });
  })
  return (
    <View>
      <Text>Category</Text>
    </View>
  )
}