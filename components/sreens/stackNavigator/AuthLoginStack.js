import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../Registration';
import ForgotPassword from '../ForgotPassword';
import LoginScreen from '../LoginScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();

const AuthLoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthLoginStack