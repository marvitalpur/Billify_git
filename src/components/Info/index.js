import { View, Text, StyleSheet, Appearance } from 'react-native'
import React from 'react'

const Info = ({ Infotext, InfoText1, InfoText2 }) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View>
            <View style={styles.box}>
                <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 18, margin: 15, marginTop: 20, fontWeight: 'bold', }}>{Infotext}</Text>
                <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 14, marginVertical: 20, margin: 15, }}>
                    {InfoText1}


                </Text>
                <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 14, marginVertical: 20, margin: 15, }}>
                    {InfoText2}


                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#EFEFEF',
        height: 482,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        elevation: 4,


    },
    txt1: {
        color: '#4B4B4B', fontSize: 18, margin: 15, marginTop: 20, fontWeight: 'bold'

    },
    txt2: {
        fontSize: 14, marginVertical: 20, margin: 15,

    }

})

export { Info }