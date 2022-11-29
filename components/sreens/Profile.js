
import { React, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import Icone from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();
    const clickHandler = () => {
        navigation.navigate('Notification');
    }
    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../images/success.png')} style={styles.header} />
            </View>
            <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

            <View style={styles.bodycontainer}>
                <Text style={styles.name}>Codes For Tomorrow</Text>
                <TouchableOpacity>
                    <Text>Edite Profile</Text>
                </TouchableOpacity>

                <View style={styles.optioncontainerbody}>
                    <View style={styles.optioncontainer}>

                        <Icone name='lightbulb' style={styles.iconstyle} />
                        <Text style={styles.optioncontainerTextInput}> Dark Mode</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={styles.iconstyleright}
                        />

                    </View>

                    <View style={styles.optioncontainer}>

                        <Icone name='language' style={styles.iconstyle} />
                        <Text style={styles.optioncontainerTextInput}> Change Language</Text>
                    </View>
                    <View style={styles.optioncontainer}>

                        <Icone name='notifications' style={styles.iconstyle} onPress={clickHandler} />
                        <Text style={styles.optioncontainerTextInput}> Notification</Text>
                    </View>
                </View>

            </View>

        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#777",
        height: 200,
        width: '100%'
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    bodycontainer: {
        //backgroundColor: '#777',
        height: 200,
        //width: '90%',
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop: 70,

    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    optioncontainerbody: {
        marginTop: 10,
        //backgroundColor: '#777',
        width: '90%',
        position: 'relative',
    },
    optioncontainer: {
        //backgroundColor: "#BABABA",
        borderRadius: 20,
        width: "95%",
        height: 45,
        marginTop: 15,
        //alignItems: "center",
        position: 'relative',

    },
    optioncontainerTextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 40,
        fontSize: 18
    },
    iconstyle: {
        position: "absolute",
        top: 5,
        left: 8,
        fontSize: 30,
        color: 'red'
    },
    iconstyleright: {
        position: 'absolute',
        alignContent: 'flex-end',
        right: 10,
        fontSize: 30,
        top: 5,
        color: 'black',
    }

});
