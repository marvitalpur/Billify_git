import { StyleSheet, Text, View, ImageBackground, TextInput, Appearance } from 'react-native'
import React from 'react'
import { Footer } from '../footer'
// import { Appearance, useColorScheme } from 'react-native-appearance';



// Appearance.getColorScheme();

const SecurityBox = () => {
    // const colorScheme = useColorScheme();
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View>


            <Text style={{ color: colorScheme = "dark" ? "black" : "black" }} >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no.
            </Text>

            <View style={styles.placeholderView}>
                <TextInput placeholder='OTP Code' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} />
            </View>





        </View>
    )
}

export default SecurityBox

const styles = StyleSheet.create({
    placeholderView:
    {
        width: '100%', height: 60, borderColor: '#F46F2D', backgroundColor: '#fff',
        marginTop: 20, borderWidth: 1, borderRadius: 10, padding: 10
    },
})