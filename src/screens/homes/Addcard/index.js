
import { Icon } from 'native-base';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, StatusBar, TouchableOpacity, ScrollView, Image, Appearance } from 'react-native';

import { Button, Footer, Header } from '../../../components';
import { Images } from '../../../constants';

const AddCard = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View style={Styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <View style={{ marginTop: 20, width: '100%' }}>
                <Header text="Add Card" navigation={props.navigation} />
            </View>
            <View style={{ width: '100%', height: '100%' }}>
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>

                    <ImageBackground source={Images.Background.Background1}
                        resizeMode='stretch' style={{ width: '100%', height: '94%' }}>
                        <View style={{}}>

                            <View style={Styles.BoxView}>
                                <View style={Styles.whiteBox}>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>Debit Card/Credit Card</Text>
                                </View>
                                <View style={Styles.TextBox}>
                                    <Text style={{ color: '#fff' }}>Paypal</Text>
                                </View>
                            </View>
                            <View style={Styles.centerView}>
                                <View style={Styles.inputView}>
                                    <TextInput placeholder='Card Holder Name' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ fontSize: 13 }} />
                                </View>
                                <View style={Styles.inputView}>
                                    <TextInput placeholder='Card Number ' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ fontSize: 13 }} />
                                </View>
                                <View style={Styles.inputView}>
                                    <TextInput placeholder='Expiry Date' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={Styles.input}
                                    />
                                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                                        <Icon name='down' type='AntDesign' style={{ color: '#F26722', fontSize: 20, alignSelf: 'center' }} />
                                    </TouchableOpacity>

                                </View>
                                <View style={Styles.inputView}>
                                    <TextInput placeholder='CVV last 3 digits displayed on back of your card'
                                        placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ fontSize: 13 }} />
                                </View>
                                <View style={Styles.inputView}>
                                    <TextInput placeholder='Zip Code' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ fontSize: 13 }} />

                                </View>


                                <TouchableOpacity style={Styles.btn}>
                                    <Button button="Add Card" onPress={() => props.navigation.goBack()} />
                                </TouchableOpacity>
                                <View style={Styles.imgView}>
                                    <Image source={Images.Card.Card2} />
                                    <Image source={Images.Card.Card1} />
                                    <Image source={Images.Card.Card3} />
                                    <Image source={Images.Card.Card4} />
                                    <Image source={Images.Card.Card5} />
                                </View>

                            </View>

                            <View style={Styles.footer}>
                                <Footer footer1 footer2
                                    props1={() => { props.navigation.navigate('Profile') }}
                                    props2={() => { props.navigation.navigate('Conditions') }}
                                    props3={() => { props.navigation.navigate('Paymentmethod') }}
                                    props4={() => { props.navigation.navigate('UserGuide') }} />


                            </View>
                        </View>




                    </ImageBackground>

                </ScrollView>
            </View>
        </View>



    )
}
const Styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
    },
    Img: {},

    input: {
        width: '90%',

        fontSize: 13

    },

    BoxView: {
        alignSelf: 'center', height: 60, borderRadius: 10, flexDirection: 'row',
        marginTop: 5, backgroundColor: '#F26722', alignItems: 'flex-end', justifyContent: 'center'
    },
    whiteBox: {
        width: '45%',
        height: 42, marginLeft: 2,
        backgroundColor: '#fff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextBox: {
        width: '45%',
        height: 52,
        // ackgroundColor: '#F26722',
        alignItems: 'center',
        justifyContent: 'center'

    },
    centerView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10
    },

    txt: { fontSize: 16, },

    inputView: {
        marginTop: 10, height: 60,
        borderRadius: 10, borderColor: '#F26722',
        borderWidth: 1, backgroundColor: '#fff', padding: 10,
        flexDirection: 'row'
    },

    btn: { marginTop: 15 },
    imgView: {
        justifyContent: 'space-between',
        marginTop: 15,
        flexDirection: 'row',
        marginVertical: 20

    },

    footer: { width: '80%', alignSelf: 'center', marginBottom: '30%' }
})
export default AddCard;