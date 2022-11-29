import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AppHeader from './header/AppHeader'
import { useNavigation } from '@react-navigation/native';
import Icone from 'react-native-vector-icons/MaterialIcons'
import CustomPicker from './header/CustomPicker';
import Category from './Category';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context';

const cartIcon = <Icone name='add-shopping-cart' />

const data = [

    {
        name: 'PPF',
        icon: 'security',
    },
    {
        name: 'Ceramic',
        icon: 'face',
    },
    {
        name: 'Polishing  cleaning',
        icon: 'polymer',
    },
    {
        name: 'Interior Accessories',
        icon: 'subtitles',
    },
]
const textAlignments = ["auto", "left", "right", "center", "justify"];


const HomeScreen = () => {

    const navigation = useNavigation();
    const [textAlignIdx, setTextAlignIdx] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* header */}
                <AppHeader
                    title={"Home"}
                    headerBg={"#60c5a8"}
                    iconColor={"black"}
                    menu={'reorder'}//or back
                    // optionalBadge={5}
                    navigation={navigation}
                    right='add-shopping-cart'
                    rightFunction={() => console.warn('right')}
                    optionalBtn={'person'}
                    optionalIcon={'notification'}
                    optionalFunc={() => console.log('optional')}
                    onRightPress={() => { console.warn('hii') }}
                    optionalBtnPress={() => {
                        navigation.navigate('Profile');
                    }}
                />
                <Text>


                </Text>

                {/* AD container code */}
                <View style={styles.ad_component_style_view}>

                    <ScrollView horizontal={true}>
                        {Array(2).fill('1').map((item, index) => (

                            <TouchableOpacity style={styles.img_view_container_styles} key={index}>
                                <Image source={require('../images/discount.png')} style={styles.add_img_style} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                </View>

                {/* Menue code */}
                <Category />


                {/* All Products */}
                <View style={[styles.recommended_top_view]}>
                    <Text>Recommended</Text>

                    {Array(4).fill('1').map((item, index) => (
                        <View key={index} style={{ justifyContent: 'center', alignItems: 'center', top: 10, bottom: 20, }}>
                            <Image source={(require('../images/product1.jpg'))} style={{ marginVertical: 10 }} />
                            <View>

                                <Text style={styles.product_text_price_style}>CHEMICAL GUYS P40 QUICK DETAILER SPRAY WITH CARNAUBA WAX</Text>
                                <Text style={styles.product_text_price_style}>Price : 800 </Text>
                            </View>
                            <TouchableOpacity style={styles.view_details_btn}>
                                <Text style={{ fontSize: 30, color: '#fff' }}>See Details</Text>
                            </TouchableOpacity>

                        </View>
                    ))}

                    <TouchableOpacity style={styles.view_more_btn}>
                        <Text style={{ fontSize: 20, color: '#fff' }}>See More</Text>
                    </TouchableOpacity>
                </View>
                {/* <CustomPicker
                    label="Text Align"
                    data={textAlignments}
                    currentIndex={textAlignIdx}
                    onSelected={setTextAlignIdx}
                /> */}

            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ad_component_style_view: {
        height: 150,
        // backgroundColor:'#777',
        marginHorizontal: 5,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },
    img_view_container_styles: {
        marginBottom: 10
    },
    add_img_style: {
        height: 130,
        width: 360,
        margin: 10
    },
    menue_top_view: {
        //padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        top: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginHorizontal: 8,
        marginVertical: 10,



    },
    menue_top_view_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //backgroundColor: '#777',

    },
    menue_main_view: {
        padding: 10,
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        position: 'relative'



    },
    menue_icon_style: {
        fontSize: 50,
        color: '#000',
        marginLeft: 'auto',
        marginRight: 'auto',
        // borderWidth:2

    },
    manue_item_text_style: {
        // justifyContent: 'center',
        // alignItems:'center'
        //borderWidth: 2
        fontSize: 20,
        textAlign: 'center'
    },
    recommended_top_view: {
        //     //padding: 10,
        //     // paddingTop: 30,
        //     // paddingBottom: 20,
        //     top: 10,
        //     // backgroundColor: '#777',
        //     marginBottom: 10,
        //     borderRadius: 8,
        //     paddingVertical: 45,
        //     paddingHorizontal: 25,
        //     marginVertical: 5,
        //  //   width: '100%',

        paddingTop: 10,
        paddingBottom: 20,
        top: 10,
        //backgroundColor: '#777',
        marginBottom: 5,
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 1,
        marginVertical: 10,



    },
    all_product_second_container: {


        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // width:'80%'
        //backgroundColor:'#777'
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 2,

        elevation: 7,
    },
    product_img_style: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: '56%',
        //borderWidth:2
        marginVertical: 20,
    },
    product_text_style: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#000'
    },
    product_text_price_style: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#000'
    },
    view_details_btn: {
        height: 50,
        //  borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#60c5a8',
        borderRadius: 10,
        margin: 10

    },
    view_more_btn: {
        height: 30,
        //  borderWidth: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: 100,
        backgroundColor: '#60c8',
        borderRadius: 10,
        margin: 10,


    }



})

export default HomeScreen

//rnfe