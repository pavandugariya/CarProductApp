import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge, Surface, Title } from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'
//import Colors from '../constants/Colors';
import Icone from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


const IconSize = 24;

const AppHeader = ({ style, menu, back, title, right, onRightPress, optionalBtn, optionalBtnPress, rightComponent, headerBg, iconColor, titleAlight, optionalBadge }) => {

    const navigation = useNavigation();
    const LeftView = () => (
        <View style={styles.view}>
            {menu && <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                <Icone name={menu} size={IconSize} color={iconColor} />
            </TouchableOpacity>}
            {back && <TouchableOpacity onPress={() => { }}>
                <Icone name={back} size={IconSize} color={iconColor} />
            </TouchableOpacity>}
        </View>
    )

    const RightView = () => (
        rightComponent ? rightComponent :
            <View style={[styles.view, styles.rightView]}>
                {optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
                    <Icone name={optionalBtn} size={IconSize} color={iconColor} />
                    {optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
                </TouchableOpacity>}
                {right && <TouchableOpacity onPress={onRightPress}>
                    <Icone name={right} size={IconSize} color={iconColor} />
                </TouchableOpacity>}
            </View>
    )
    const TitleView = () => (
        <View style={styles.titleView}>
            <Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
        </View>
    )
    return (
        <Surface style={[styles.header, style, { backgroundColor: headerBg }]}>
            <LeftView />
            <TitleView />
            <RightView />
        </Surface>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
    },
    view: {
        marginHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleView: {
        flex: 1,
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    }
})