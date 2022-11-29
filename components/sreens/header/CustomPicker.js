import React from 'react';
import { Text, StyleSheet, StatusBar, View, FlatList, TouchableWithoutFeedback } from 'react-native'


const CustomPicker = ({ label, data, currentIndex, onSelected }) => {
    return (
        <>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.wrapperHorizontal}>
                <FlatList
                    bounces
                    horizontal
                    data={data}
                    keyExtractor={(item, idx) => String(item)}
                    renderItem={({ item, index }) => {
                        const selected = index === currentIndex;
                        return (
                            <TouchableWithoutFeedback onPress={() => onSelected(index)}>
                                <View
                                    style={[
                                        styles.itemStyleHorizontal,
                                        selected && styles.itemSelectedStyleHorizontal
                                    ]}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            color: selected ? "black" : "grey",
                                            fontWeight: selected ? "bold" : "normal"
                                        }}
                                    >
                                        {item + ""}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    }}
                />
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    paragraph: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        margin: 24
    },
    wrapperHorizontal: {
        height: 54,
        justifyContent: "center",
        color: "black",
        marginBottom: 12
    },
    itemStyleHorizontal: {
        marginRight: 10,
        height: 50,
        padding: 8,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 25,
        textAlign: "center",
        justifyContent: "center"
    },
    itemSelectedStyleHorizontal: {
        borderWidth: 2,
        borderColor: "#DAA520"
    },
    platformContainer: {
        marginTop: 8,
        borderTopWidth: 1
    },
    platformContainerTitle: {
        marginTop: 8
    },
    title: {
        fontWeight: "bold",
        marginVertical: 4
    }
});
export default CustomPicker;