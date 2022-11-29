import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Profile';
import HomeScreen from '../HomeScreen';
import BottomTab from './BottomTab';
import 'react-native-gesture-handler';
import NotShowStack from './DraweNavigation';


import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../LoginScreen';
import Registration from '../Registration';
import ForgotPassword from '../ForgotPassword';
import Category from '../Category';
import Notification from '../Notification';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const AuthStack = () => {

    return (



        <Stack.Navigator >
            <Stack.Screen name="Drawer1" component={NotShowStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={Profile} />
           

            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Notification" component={Notification} />
          
        </Stack.Navigator >


    )

}



export default AuthStack