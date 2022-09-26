import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { JokesScreen } from '../screens/JokesScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' >
            <Stack.Screen name='register' component={RegistrationScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='jokes' component={HomeScreen} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>
    
        
       
    )
}