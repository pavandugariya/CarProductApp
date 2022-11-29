import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import BottomTab from './BottomTab';

import LoginScreen from '../LoginScreen';
import DrawerContent from './DrawerContent';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    //   <Stack.Navigator  > //initialRouteName="Profile"          
    //       <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props}/>}
    
      initialRouteName="HomeScreen" >
      <Drawer.Screen name='HomeScreen' component={BottomTab} options={{ headerShown: false }} />
      {/* <Drawer.Screen name='Login ' component={LoginScreen} options={{ headerShown: false }} /> */}
    </Drawer.Navigator>
  )
}

export default DrawerNavigation