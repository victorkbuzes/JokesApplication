import { View, Text  } from 'react-native'
import React from 'react'
import { JokesCategory } from '../features/jokes/JokesCategory'


export const CategoryScreen = () => {



  return (
    <View>
      <Text>Get Jokes Per Category</Text>

      <Text>Select Category from the Picker</Text>
     
      <JokesCategory/>
 
     
   

    </View>
  )
}