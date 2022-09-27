import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import JokesAppScreen from '../screens/JokesAppScreen';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='jokes' >
            <Stack.Screen name='login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='jokes' component={JokesAppScreen} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>
    
        
       
    )
}