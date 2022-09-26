import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { SafeAreaView } from 'react-native'
import { Input } from '../components/Input'

export const RegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1 }}>
      <View style ={{ paddingTop: 50, paddingHorizontal: 20}}  >
        <Text style = {{color : COLORS.black, fontSize: 40, fontWeight: 'bold'}}>RegistrationScreen</Text>
        <Text style = {{color : COLORS.grey, fontSize: 18, marginVertical: 10}}>Enter details to register</Text>
        <View style= {{marginVertical: 20}}>
          <Input placeholder = "Enter your email" iconName="email-outline" label ="Email" />
          <Input placeholder = "Enter your password" iconName="lock-outline" label ="Password" password />


        </View>
      </View>

    </SafeAreaView>
  
  )
}
