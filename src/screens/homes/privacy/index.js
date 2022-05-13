import React from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, ScrollView, Appearance } from 'react-native';

import { Footer, Header, Info, } from '../../../components';
import { Images } from '../../../constants';

const Privacy = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <ImageBackground style={styles.main}
            source={Images.Background.Background1} resizeMode="stretch">
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <View>
                    <View style={{ marginTop: 30, color: colorScheme = "dark" ? "black" : "black" }}>
                        <Header text="Privacy Policy" navigation={props.navigation} />
                    </View>
                    <Info Infotext="Lorem Ipsum." InfoText1="Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod

                    consetetur." InfoText2="   no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " />


                </View>
                <View style={{ marginTop: '30%' }}>

                    <Footer footer2 />

                </View>
            </ScrollView>

        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: 'green',
        width: '100%'
    },



})
export default Privacy;
