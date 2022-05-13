
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, ScrollView, Image, StatusBar, Appearance } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

import { Header, PopUp, Footer } from '../../../components';
import { Images, } from '../../../constants';
import BillingCard from '../../../components/billingCard';

const SecurityScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    console.log("security")
    console.log(props.navigation.canGoBack)


    const [state, setState] = useState(false);
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)

    return (
        <>
            <View style={Styles.main}>

                <ImageBackground source={Images.Background.Background1} resizeMode='stretch' style={Styles.Img}>
                    <StatusBar backgroundColor={'transparent'} translucent={true} barStyle="dark-content" />


                    <View style={{ marginTop: 30 }}>
                        <Header navigation={props.navigation}
                            text="Billing History" propss={() => { props.navigation.goBack() }} />
                    </View>


                    <View style={Styles.BoxView}>
                        <TouchableOpacity onPress={() => { setState(true) }}
                            style={[Styles.whiteBox, { backgroundColor: state === true ? '#fff' : 'transparent', width: state === true ? 100 : 200 }]}>
                            <Text style={{ color: state === false ? '#fff' : 'black', fontSize: 18, textAlign: 'center', }}>Summary</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setState(false) }}
                            style={[Styles.whiteBox1, { backgroundColor: state === false ? '#fff' : 'transparent', width: state === false ? 100 : 200 }]}>
                            <Text style={{ color: state === true ? '#fff' : 'black', fontSize: 18, textAlign: 'center' }}>Paid Bills</Text>
                        </TouchableOpacity>
                    </View>

                    {state === false ? <View style={{ width: '90%', alignSelf: 'center' }}>


                        <View style={Styles.centerView}>
                            <ScrollView keyboardShouldPersistTaps="handled"
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1 }}>
                                <View style={{ marginTop: 30 }}>
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
                                                // alert("CHAL RHA HY?")
                                                console.log("RHAHHAHAH")
                                                setModalVisible(!modalVisible)
                                            }} style={{
                                                backgroundColor: '#f26d2b', width: 80, height: 30, borderRadius: 5,
                                                marginTop: 6, alignItems: 'center', justifyContent: 'center'
                                            }}>
                                                <Text style={{ color: '#fff' }}>View</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <BillingCard />
                                <BillingCard />
                                <BillingCard />
                                <BillingCard />
                                <BillingCard />
                                <BillingCard />


                            </ScrollView>
                        </View>






                    </View> :
                        <View style={{ width: '90%', alignSelf: 'center', }}>
                            <ScrollView>


                                <View style={{
                                    width: '100%', height: 200, marginTop: 30,
                                    backgroundColor: '#fff', borderRadius: 20,
                                }}>
                                    <View style={{
                                        marginTop: 20,
                                        width: '90%', alignSelf: 'center',
                                        flexDirection: 'row', justifyContent: 'space-between'
                                    }}>
                                        <View style={{}}>
                                            <Text style={{ fontSize: 23, fontWeight: '600', color: colorScheme = "dark" ? "black" : "black" }}>Total Amount</Text>
                                        </View>
                                        <View style={{}}>
                                            <Text style={{ fontSize: 20, color: '#1F78B4', fontWeight: '600' }}>$1345.00</Text>
                                        </View>

                                    </View>
                                    <View style={{
                                        marginTop: 20,
                                        width: '85%', alignSelf: 'center',
                                        flexDirection: 'row',
                                        alignItems: 'center', justifyContent: 'space-between'
                                    }}>
                                        <View style={{ justifyContent: 'space-around' }}>
                                            <Text style={{ fontSize: 14, paddingTop: 10, color: colorScheme = "dark" ? "black" : "black" }}>Veni's</Text>
                                            <Text style={{ fontSize: 14, paddingTop: 10, color: colorScheme = "dark" ? "black" : "black" }}>Dad's</Text>
                                            <Text style={{ fontSize: 14, paddingTop: 10, color: colorScheme = "dark" ? "black" : "black" }}>Home</Text>
                                        </View>

                                        <View style={{}}>
                                            <Text style={{ fontSize: 14, color: '#F26D2B', paddingTop: 10 }}>$1345.00</Text>
                                            <Text style={{ fontSize: 14, color: '#F26D2B', paddingTop: 10 }}>$1345.00</Text>
                                            <Text style={{ fontSize: 14, color: '#F26D2B', paddingTop: 10 }}>$1345.00</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ width: '60%', flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                                    <View style={{ width: '10%' }}>
                                        <Icon name='left' type='AntDesign' style={{ color: '#0D79C3', fontSize: 22, }} />
                                    </View>
                                    <View style={{ width: '80%', alignItems: 'center' }}>
                                        <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>January 2022</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Icon name='right' type='AntDesign' style={{ color: '#0D79C3', fontSize: 22, }} />
                                    </View>
                                </View>
                                <View style={{ marginTop: '70%' }}>

                                    <Footer footer2 />

                                </View>
                            </ScrollView>
                        </View>}

                </ImageBackground>
            </View>
            <View styles={{ paddingbottom: 30 }}>

                <View styles={{ paddingbottom: 30 }}>
                    <PopUp
                        onClose={() => setModalVisible(false)}

                        visible={modalVisible} />
                </View>

            </View>
        </>


    )
}
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
        height: '100%',
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



    // footer: { marginTop: 130, width: '90%', alignSelf: 'center' }
})
export default SecurityScreen;