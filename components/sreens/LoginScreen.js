import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Image, Dimensions, Button } from 'react-native'
import React, { useState } from 'react'
import Icone from 'react-native-vector-icons/MaterialIcons'
import { useHandler } from 'react-native-reanimated';
//import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../context';


const image = {
    uri: "https://static.vecteezy.com/system/resources/previews/005/176/225/non_2x/mountain-landscape-illustration-in-flat-style-with-design-hill-and-smoke-in-night-view-aesthetic-nature-background-banner-template-for-mobile-phone-screen-saver-theme-lock-screen-and-wallpaper-free-vector.jpg"
};
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const iconColor = '#D83E35';
const iconSize = 25;

const LoginScreen = () => {



    const { colors } = useTheme();

    const navigation = useNavigation();
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { signIn } = React.useContext(AuthContext);
    const clickHandler = (username, password) => {
        signIn(username, password);

        // if (data.username === 'pavan' && data.password === 'pavan123') {
        //     alert('your login')
        //     navigation.navigate('Home')


        // } else {

        //     alert(`please fill correct details`)
        // }
    };

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const loginHandle = (userName, password) => {

        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });

        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser);
    }

    const ForgotPass = () => {
        navigation.navigate('ForgotPassword')
    }


    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View style={[styles.footer, { backgroundColor: colors.background }]}
                animation="fadeInUpBig"

            >
                <ScrollView>
                    {/* {
                backgroundColor: colors.background
            } */}
                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>Username</Text>

                    <View style={styles.action}>
                        <Icone name='email' size={20} />
                        <TextInput
                            placeholder="Your Username"
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
                    {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={1000}>
                            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                        </Animatable.View>
                    }
                    <Text style={[styles.text_footer, {
                        color: colors.text,
                        marginTop: 20
                    }]}>Password</Text>

                    <View style={styles.action}>
                        <Icone name='security' size={20} />
                        <TextInput
                            placeholder="Enter your password"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Icone
                                    name="visibility"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Icone
                                    name="visibility"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                        </Animatable.View>
                    }
                    <TouchableOpacity onPress={() => ForgotPass()} >
                        <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={[styles.signIn,]}
                            colors={['#08d4c4', '#01ab9d']}
                            onPress={() => { clickHandler(data.username, data.password) }}
                        //  onPress={() => { loginHandle(data.username, data.password) }}
                        >
                            <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.signUp}
                            onPress={() => navigation.navigate('Registration')}
                        // onPress={() => { loginHandle(data.username, data.password) }}
                        >
                            <Text style={[styles.textSign, { color: '#08d4c4' }]}>Sign Up</Text>

                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </Animatable.View>

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
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
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
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "transparents",
        marginBottom: 20,
        borderWidth: 0.5
    },
});

export default LoginScreen