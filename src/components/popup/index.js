import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, ScrollView, View, Image, TouchableOpacity, Appearance } from "react-native";
import { Images } from "../../constants";
import { Button } from "../button";




const PopUp = (props) => {
    const { height, width, sendMsg, onClose } = props
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View style={{}} >

            <Modal
                onRequestClose={onClose}
                style={{ backgroundColor: '#0000', }} visible={props.visible} transparent>
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{
                        width: width || '90%',
                        backgroundColor: "#fff",
                        borderRadius: 20,
                        padding: 28,
                        alignSelf: 'center',
                        alignItems: "center",
                        marginTop: 46,
                        elevation: 30,
                        marginBottom: 40,
                        elevation: 20,

                    }}>
                        <View style={{
                            height: 250, width: 250,
                            position: 'absolute', top: -110
                        }}>
                            <Image source={Images.Icons.check} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
                        </View>
                        <View style={{ width: '100%' }}>


                            <View style={{ width: '100%', alignSelf: 'center', alignItems: 'center' }} >
                                <View style={{ width: 110, height: 52, marginTop: 50 }}>
                                    <Image source={Images.Background.bili2}
                                        resizeMode='contain' style={{ width: '100%', height: '100%' }} />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>

                                <View style={{ marginTop: 20, }}>
                                    <Text style={{
                                        color: colorScheme = "dark" ? "black" : "black",

                                        marginTop: 5,
                                        fontSize: 15, fontWeight: 'bold'
                                    }}>Bill Payment Date</Text>
                                    <Text style={{
                                        marginTop: 5, color: colorScheme = "dark" ? "black" : "black",

                                        fontSize: 12,
                                    }}>7-Feb-2022 5:25 PM</Text>
                                    <Text style={{
                                        color: colorScheme = "dark" ? "black" : "black",

                                        marginTop: 5,
                                        fontSize: 15, fontWeight: 'bold',
                                    }}>Payee</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        marginTop: 5, color: colorScheme = "dark" ? "black" : "black"

                                    }}>Verizon</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 15, fontWeight: 'bold', color: colorScheme = "dark" ? "black" : "black",

                                    }}>Account Name</Text>

                                    <Text style={{
                                        fontSize: 12,
                                        marginTop: 5, color: colorScheme = "dark" ? "black" : "black"

                                    }}>Veni Paul</Text>

                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 15, fontWeight: 'bold', color: colorScheme = "dark" ? "black" : "black"

                                    }}>Account ID</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        marginTop: 5, color: colorScheme = "dark" ? "black" : "black"

                                    }}>01516844889888</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 15,
                                        color: '#f26722', fontWeight: 'bold',

                                    }}>Total Amounte</Text>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 15, fontWeight: 'bold', color: colorScheme = "dark" ? "black" : "black"

                                    }}>$130.00</Text>

                                </View>
                                <View style={{ marginTop: 20, }}>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 15, fontWeight: 'bold', color: colorScheme = "dark" ? "black" : "black"

                                    }}>Transaction ID</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        marginTop: 5, color: colorScheme = "dark" ? "black" : "black"

                                    }}>#12368494947</Text>

                                </View>
                            </View>

                            <View style={{ marginTop: 100, width: '100%', }}>

                                <View style={{

                                    flexDirection: 'row', justifyContent: 'space-between'

                                }}>
                                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                                        <Image source={require('../../assets/share.png')} />
                                        <Text style={{
                                            color: colorScheme = "dark" ? "black" : "black"
                                        }}>Share Now
                                        </Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                                        <Image source={require('../../assets/photo1.png')} />
                                        <Text style={{
                                            color: colorScheme = "dark" ? "black" : "black"
                                        }}>Save To Gallery
                                        </Text>
                                    </View>
                                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                                        <Image source={require('../../assets/file.png')} />
                                        <Text style={{
                                            color: colorScheme = "dark" ? "black" : "black"
                                        }}>Save As Pdf
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '100%', marginTop: 30 }}>
                                <TouchableOpacity style={[styles.button, styles.buttonClose]}>
                                    <Button button="Pay Now" onPress={props.closePopup} />

                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </ScrollView>

            </Modal>

        </View>



    )


    // onPress={props.closePopup} 
}
const styles = StyleSheet.create({



    modalView: {



    },
    button: {
        borderRadius: 20,
        width: '100%', alignSelf: 'center',
        elevation: 2
    },
    buttonOpen: {

    },
    buttonClose: {
        // backgroundColor: "#2196F3",
    },
    textStyle: {
        fontSize: 17, color: '#292929', fontWeight: '400'

    },
    textStyle1: {
        fontSize: 14, color: '#292929',
        fontWeight: '300'
    },
    colorStyle: {
        color: '#F26722',
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textStyle4: {
        marginTop: 5,
        fontSize: 15, fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 12,
        marginTop: 5,
    },
    textStyle5: {
        marginTop: 5,
        fontSize: 15,
        color: '#f26722', fontWeight: 'bold'

    }
});

export { PopUp }

// <Button onPress={props.closePopup} button='Pay Now' />