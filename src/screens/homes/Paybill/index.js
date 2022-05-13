import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Image, StatusBar, Appearance } from 'react-native';
import { Footer, Header } from '../../../components';
import { Images } from '../../../constants';

const Pay = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View style={Styles.main}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <View style={{ width: '100%', marginTop: 30 }}>
                    <Header text="How To Pay Bill" navigation={props.navigation} />
                </View>
                <ImageBackground source={Images.Background.Background1} resizeMode="stretch" style={Styles.bg}>

                    <View style={Styles.BoxView}>
                        <View style={Styles.box}>
                            <View style={Styles.one1}>
                                <Text style={{ color: colorScheme = "dark" ? "black" : "black", fontSize: 18, fontWeight: '500' }}>Lorem Ipsum.
                                </Text>
                                <Text style={{ color: colorScheme = "dark" ? "black" : "black", }}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no.
                                </Text>

                            </View>
                            <View style={Styles.one}>
                                <View>
                                    <Image source={Images.Background.Background4} />
                                </View>

                                <View style={Styles.TextView}>
                                    <Text style={Styles.Text}>Lorem Ipsum.</Text>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black", }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                                        et accusam et justo duo dolores et ea rebum.
                                        Stet clita kasd gubergren, no.</Text>

                                </View>

                            </View>
                            <View style={Styles.one}>

                                <View style={Styles.TextView} >
                                    <Text style={Styles.Text}>Lorem Ipsum.</Text>
                                    <Text style={{ color: colorScheme = "dark" ? "black" : "black", }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                                        et accusam et justo duo dolores et ea rebum.
                                        Stet clita kasd gubergren, no.</Text>
                                </View>
                                <View>
                                    <Image source={Images.Background.Background5} />
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Footer footer2 />
                    </View>


                </ImageBackground>
            </ScrollView>

        </View >

    )
}
const Styles = StyleSheet.create(
    {
        main: {
            flex: 1,

        },
        bg: {
            width: '100%',
            height: '93%',


        },
        BoxView: {
            width: '90%',
            alignSelf: 'center'

        },
        Text:
            { color: '#4B4B4B', fontSize: 18, fontWeight: '500' },

        box: {
            width: '100%',
            borderRadius: 25,
            padding: 10,
            height: 630,
            backgroundColor: '#fff',

            elevation: 12,
        },
        one1: {
            alignSelf: 'center',
            width: '90%',
            marginVertical: 15


        },
        TextView:
            { width: '70%', padding: 15, },

        one: {
            alignSelf: 'center',
            flexDirection: 'row'
        }

    }
)
export default Pay;