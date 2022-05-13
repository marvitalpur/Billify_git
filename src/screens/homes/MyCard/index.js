import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, StatusBar, ScrollView, Appearance } from 'react-native'
import React from 'react'
import { Footer, Header } from '../../../components'
import { Images } from '../../../constants'





const MyCard = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)

    return (
        <View Style={Styles.MainView}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 60, }}>
                    <Header text="My Card" navigation={props.navigation} />
                </View>
                <View style={{ height: '100%' }}>

                    <ImageBackground source={Images.Background.Background1}
                        style={{ width: '100%', height: '90%', }}
                        resizeMode='stretch'>



                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('Security') }} style={Styles.box}>
                                <View style={Styles.Card}>
                                    <Image source={Images.Card.Card1} />
                                </View>
                                <View style={Styles.Card}>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 14 }}>Card No.
                                    </Text>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>**** 4658</Text>
                                </View>
                                <View style={Styles.Card}>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 14 }}>Expiry
                                    </Text>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>10/25</Text>
                                </View>
                                <View style={Styles.Card}>
                                    <View style={{
                                        width: 21, height: 21,
                                        alignSelf: 'center',
                                        // backgroundColor: 'pink',
                                        borderRadius: 100,
                                        borderColor: '#4B4B4B',
                                        borderWidth: 2,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={Styles.DotBox}>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.box}>
                                <View style={Styles.Card}>
                                    <Image source={Images.Card.Card2} />
                                </View>
                                <View style={Styles.Card}>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 14 }}>Card No.
                                    </Text>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>**** 9846</Text>
                                </View>
                                <View style={Styles.Card}>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 14 }}>Expiry
                                    </Text>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>10/25</Text>

                                </View>
                                <View style={Styles.Card}>
                                    <View style={Styles.Cardbox}>

                                    </View>

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AddCard')} style={Styles.addCard} >
                                <Text style={Styles.addCardTxt}>Add Card</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: '65%' }}>

                                <Footer footer1 footer2
                                    props1={() => { props.navigation.navigate('Pay') }}
                                    props2={() => { props.navigation.navigate('Conditions') }}
                                    props3={() => { props.navigation.navigate('Paymentmethod') }}
                                    props4={() => { props.navigation.navigate('UserGuide') }} />
                            </View>
                        </View>




                    </ImageBackground>
                </View>
            </ScrollView>
        </View>
    )
}

const Styles = StyleSheet.create(
    {
        MainView: {
            flex: 1, backgroundColor: '#efefef'
        },
        bgImg: {
            width: '100%', height: '100%',

        },
        centerView: {
            width: '100%', alignSelf: 'center',
            alignItems: 'center'


        },
        footer: {
            width: '100%',
            position: 'absolute',
            bottom: 30,
            alignSelf: 'center',


        },
        box: {
            backgroundColor: '#FFFFFF',
            width: '100%',
            borderRadius: 20,
            height: 75,
            elevation: 5, justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            alignSelf: 'center'



        },
        Card: {
            width: '25%',
            // backgroundColor: 'green',
            alignItems: 'center',

        },

        Cardbox: {

            width: 21, height: 21,
            alignSelf: 'center',
            // backgroundColor: 'pink',
            borderRadius: 100,
            borderColor: '#4B4B4B',
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center'

        },
        DotBox: {
            width: 13, height: 13,
            alignSelf: 'center',
            backgroundColor: '#F36D2B',
            borderRadius: 100,



        },
        cardtxt: {
            fontSize: 10
        },
        addCard: {
            width: '100%', alignItems: 'flex-end', marginTop: 10
        },
        addCardTxt: {
            color: '#F26A26',
            fontSize: 16
        }
    }

)

export default MyCard;