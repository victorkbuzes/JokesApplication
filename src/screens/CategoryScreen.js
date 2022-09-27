import { View, Text, StyleSheet  } from 'react-native'
import React from 'react'
import { JokesCategory } from '../features/jokes/JokesCategory'


export const CategoryScreen = () => {



  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Get Jokes Per Category</Text>

      <Text style={styles.text}>Select Category from the Picker</Text>
     
      <JokesCategory/>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      padding: 10,
      backgroundColor: "white",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop:30,
    color: '#4C0033',
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop:30,
    paddingBottom:30

  }


})