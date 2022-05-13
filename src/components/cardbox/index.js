import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Images } from '../../constants'

const Cardbox = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Security') }} style={Styles.box}>
                <View style={Styles.Card}>
                    <Image source={Images.Card.Card1} />
                </View>
                <View style={Styles.Card}>
                    <Text style={Styles.cardtxt}>Card No.
                    </Text>
                    <Text style={Styles.cardtxt}>**** 4658</Text>
                </View>
                <View style={Styles.Card}>
                    <Text style={Styles.cardtxt}>Expiry
                    </Text>
                    <Text style={Styles.cardtxt}>10/25</Text>
                </View>
                <View style={Styles.Card}>
                    <View style={Styles.Cardbox}>
                        <View style={Styles.DotBox}>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Cardbox

const Styles = StyleSheet.create(
    {
        MainView: {
            flex: 1, backgroundColor: '#efefef'
        },
        bgImg: {
            width: '100%', height: '100%',

        },
        centerView: {
            width: '100%', height: '100%', alignSelf: 'center',
            alignItems: 'center'


        },
        footer: {
            width: '90%',
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
            marginTop: 20



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

