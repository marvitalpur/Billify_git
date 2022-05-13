import { StyleSheet, Text, View, TouchableOpacity, Appearance } from 'react-native'
import React, { useState } from 'react'
import { PopUp } from '../popup'


const BillingCard = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)

    return (


        <View style={Styles.centerView}>
            <View>
                <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>Today, 8 February</Text>
            </View>

            <View style={Styles.Box}>
                <View style={Styles.InnerBox}>
                    <View style={Styles.box}>
                        <Text style={{ color: '#000000', fontWeight: '400', color: colorScheme = "dark" ? "black" : "black" }}>
                            Verizon
                        </Text>
                        <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>
                            2:15 PM
                        </Text>
                    </View>
                    <View style={Styles.Touchablebox}>
                        <TouchableOpacity style={Styles.box1}>
                            <Text style={{ color: '#F26D2B', fontSize: 14 }}>
                                $354.00
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {


                            // setModalVisible(!modalVisible)
                        }} style={{
                            backgroundColor: '#f26d2b', width: 80, height: 30, borderRadius: 5,
                            marginTop: 6, alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text style={{ color: '#fff', }}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>



        // <View styles={{ paddingbottom: 30 }}>
        //     <PopUp sendMsg closePopup={() => {
        //         setModalVisible(false),
        //             props.navigation.navigate('HomeScreen')

        //     }}
        //         visible={modalVisible} />


        // </View>






    )
}

export default BillingCard

const Styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    Img: { width: '100%', height: '100%', },



    BoxView: {
        width: '90%', alignSelf: 'center', height: 60, borderRadius: 10,
        flexDirection: 'row',
        marginTop: 10, backgroundColor: '#F26722', alignItems: 'flex-end',
        paddingRight: 10, paddingLeft: 10,
        justifyContent: 'space-between',
    },
    whiteBox: {


        height: '80%',

        // backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteBox1: {


        height: 52,
        // backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextBox: {
        paddingLeft: 20,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        height: 52,
        // ackgroundColor: '#F26722',


    },
    centerView: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
    },
    Box:
    {
        width: '100%',
        backgroundColor: '#EFEFEF', borderRadius: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center',
        height: 64, flexDirection: 'row', elevation: 3, justifyContent: 'space-around', alignItems: 'center'
    },
    InnerBox: {
        width: '90%', justifyContent: 'center', flexDirection: "row", alignItems: 'center', justifyContent: 'center'
    },
    Touchablebox: {
        flexDirection: 'row', padding: 15,

    },
    box: {
        width: '60%',
        // backgroundColor: 'red',
        padding: 16


    },
    box1: {

        marginTop: 10,
        // backgroundColor: 'green',

        justifyContent: 'flex-start', paddingRight: 7,
        paddingBottom: 10


    },

    btn: {

        height: 31,
        backgroundColor: '#F26722',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',



    }

})