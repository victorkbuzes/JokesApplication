import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Jokes from '../features/jokes/Jokes'
import { useSelector } from 'react-redux'


export const JokesScreen = () => {
  const {name} = useSelector(state => state.userReducer)

  return (
    <View style ={styles.container} >
      <Text  style={styles.text} > Hello {name}</Text>
      <Text style={styles.jokes} >Chuck Norris Jokes Application</Text>
      <Text style={styles.baseText} >The Joke is</Text>

      <Jokes  />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white", 
  }, 
  text: {
    paddingTop: 10,
    fontSize:30,
    fontWeight: "bold",
    color: '#4C0033',


  },
  jokes: {
    fontSize:30,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 30,
    color: '#25316D'
  },
  baseText: {
    fontSize:20,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 30,

  }
    
})

