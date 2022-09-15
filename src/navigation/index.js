import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CategoryScreen from '../screens/CategoryScreen';
import HomeScreen from '../screens/HomeScreen';



const Tab= createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export const RoootNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='home' component={HomeScreen}/>
            <Tab.Screen name='category' component={CategoryScreen}/>

        </Tab.Navigator>
        
        
    </NavigationContainer>
  )
}
