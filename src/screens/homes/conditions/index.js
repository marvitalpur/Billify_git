import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, StatusBar } from 'react-native';

import { Footer, Header, Info, } from '../../../components';
import { Images } from '../../../constants';

const Conditions = (props) => {
    return (
        <View style={styles.main}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 30 }}>
                    <Header text="Terms & Conditions" navigation={props.navigation} />
                </View>
                <ImageBackground style={styles.main}
                    source={Images.Background.Background1} resizeMode="stretch">

                    <View>
                        <View style={{ marginTop: 30 }}>

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


                    </View>


                </ImageBackground>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: 'green',
        width: '100%'
    },



})
export default Conditions;
