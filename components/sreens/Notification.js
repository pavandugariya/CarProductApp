import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icone from 'react-native-vector-icons/MaterialIcons';

const Notification = () => {

    const navigation = useNavigation();
    return (
        <View style={notificationStyle.contaner}>
            <Icone name='notifications' size={300} />
            {/* <Image source={require('../assets/notification.png')} /> */}
        </View>
    );
}
const notificationStyle = StyleSheet.create({
    contaner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Notification;