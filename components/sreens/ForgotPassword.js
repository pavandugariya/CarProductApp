import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icone from 'react-native-vector-icons/MaterialIcons';
import react from 'react';
import * as   Animatable from 'react-native-animatable';
import { Value } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const colors = '#000'
const ForgotPassword = () => {

    const navigation = useNavigation();
    const [data, setData] = react.useState({
        email: '',
        check_textInputChange: false,
        isValidUser: false,
    });
    const textInputChange = (val) => {

        //console.warn(val)
        {
            val.trim().length <= 8 ? setData({
                ...data,
                check_textInputChange: false,
                isValidUser: false
            }) : setData({

                ...data,
                email: val,
                check_textInputChange: true,
                isValidUser: true
            })
        }

    }
    const clickHandler = () => {
        //console.warn(data.isValidUser)
        if (data.isValidUser) {
            alert(['your password send your email id ', , `${data.email}`])
            navigation.goBack()
        } else {
            alert('please fill correct email id')
        }

    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.text_header}> Forgot Password</Text>
            </View>
            <View style={styles.footer}>
                <ScrollView>

                    <Text style={[styles.text_footer, {
                        color: '#000'
                    }]}>Email Id </Text>

                    <View style={styles.action}>
                        <Icone name='email' size={20} />
                        <TextInput
                            placeholder="Enter Your Email"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Icone
                                    name="check"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}


                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={[styles.signIn,]}
                            colors={['#08d4c4', '#01ab9d']}
                            onPress={(val) => { clickHandler(val) }}
                        //  onPress={() => { loginHandle(data.username, data.password) }}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Forgot Password</Text>

                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#009387",
        marginBottom: 20
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
})

export default ForgotPassword