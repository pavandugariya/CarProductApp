import { View, Text, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import Icone from 'react-native-vector-icons/MaterialIcons'

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

const Category = () => {

    const [modalVisible, setModalVisible] = useState(false);


    return (


        <View style={[styles.menue_top_view, styles.shadowProp]}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >  
                <View style={{ flex:1,  justifyContent: 'center', alignItems:'center' , height: 100}}>
                <ModalViewDesign/>                    
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{backgroundColor:'#000' , color:'#fff', fontSize:20}}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Text>MENU</Text>
            <View style={styles.menue_top_view_container}>
                {data.map((item, index) => (
                    <View key={index} style={styles.menue_main_view}>
                        <TouchableOpacity >
                            <Icone name={item.icon} style={styles.menue_icon_style} />
                            <Text style={styles.manue_item_text_style}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}

            </View>
            {/* <TouchableOpacity style={styles.see_all_styles}>
                        <Text style={{ color: 'green' }}> See all</Text>
                    </TouchableOpacity> */}
            <TouchableOpacity style={{ alignItems: 'flex-end', top: 10 }} onPress={() => setModalVisible(true)} >
                <Text> Filter</Text>

            </TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({
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
})

export default Category

export const ModalViewDesign = () => {
    
    return (
        <View style={{ height: 200, width: 300, backgroundColor: '#60c5a8', justifyContent: 'center',  borderWidth:1, alignItems:'center'}}> 
            <Text style={{fontSize:50}}> hello</Text>
        </View>
    )
}