import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icone from 'react-native-vector-icons/MaterialIcons';

const BottomTab = () => {

    // const Tab = createBottomTabNavigator();

    const Tab = createMaterialBottomTabNavigator();
    return (

        <Tab.Navigator
            shifting={true}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{}}


            initialRouteName='Home' screenOptions={{
                headerShown: false,
                tabBarColor: '#60c5a8'
            }}  >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    backgroundColor: '#694fad',
                    tabBarIcon: ({ color }) => (
                        <Icone name="home" color={color} size={26} />
                    ),
                }}

            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarLabel: 'Setting',

                    tabBarColor: '#60a8',
                    tabBarBadge: 10,

                    tabBarIcon: ({ color }) => (
                        <Icone name="settings" color={color} size={26} />
                    ),
                }}

            />
        </Tab.Navigator>

    )
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
            <Text style={{ fontSize: 50, color:'#60a8' }}>Your Welcome!</Text>
        </View>
    );
}


export default BottomTab