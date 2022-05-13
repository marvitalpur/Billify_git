import { StyleSheet, Text, View, Image, TouchableOpacity, Appearance } from 'react-native'
import React from 'react'
import { Images } from '../../constants'

const Footer = (
    { footer1, footer2, props, props1, props2, props3, props4 }) => {

    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View style={{ width: '100%', }}>
            {footer1 && (

                <View style={Styles.main}>
                    <View style={{ width: '100%', flexDirection: 'row', height: 50 }}>
                        <TouchableOpacity onPress={props1} style={{
                            alignItems: 'center',
                            width: '50%', borderBottomColor: '#F26722', borderRightColor: '#F26722',
                            borderBottomWidth: 0.5,
                            borderRightWidth: 0.5, justifyContent: 'center',
                        }}>
                            <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>How to pay bill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props2} style={{
                            width: '50%', borderBottomColor: '#F26722', borderBottomWidth: 0.5,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>Terms & conditions</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity onPress={props3} style={{
                            width: '50%', borderBottomColor: '#F26722', borderRightColor: '#F26722',
                            borderRightWidth: 0.5, alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}> Payment method</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props4} style={{
                            width: '50%',
                            alignItems: 'center', justifyContent: 'center'

                        }}>
                            <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>User  Guide</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {footer2 && (
                <View style={Styles.footer}>
                    <View style={{
                        width: 50, height: 50, paddingRight: 15,
                        alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Image source={Images.Background.Logo2}
                            resizeMode="contain"

                            style={{ width: '100%', height: '100%' }} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 12, color: colorScheme = "dark" ? "black" : "black" }}>
                            2022 Copyright All Right Reserved

                        </Text>
                    </View>
                </View>
            )}
        </View>
    )
}

const Styles = StyleSheet.create({
    main: {
        // backgroundColor: 'green',
        width: '90%',

        alignSelf: 'center'
    },
    footer: {

        justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20,
        flexDirection: 'row',

    },

})
export { Footer }
