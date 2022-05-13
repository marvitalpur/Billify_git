




import React from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar, TextInput, ScrollView, Appearance } from 'react-native';

import { Button, Footer, Header, } from '../../../components';
import { Images } from '../../../constants';

const YourBill = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View style={Styles.main}>
            <View style={{ width: '100%' }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>


                    <View style={{ width: '100%', alignSelf: 'center', marginTop: 30 }}>
                        <Header text="Enter Bill ID" navigation={props.navigation} />
                    </View>

                    <ImageBackground source={Images.Background.Background1}
                        resizeMode='stretch'

                        style={Styles.Img}>
                        <View style={{}}>
                            <View style={Styles.content}>
                                <View style={Styles.txtView}>
                                    <Text style={{ fontSize: 14, color: colorScheme = "dark" ? "black" : "black", padding: 10 }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                        molestiae quas vel sint
                                    </Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <View style={Styles.inputView}>
                                        <TextInput placeholder='Enter Bill ID' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} />
                                    </View>
                                    <View style={Styles.inputView}>
                                        <TextInput placeholder='Rnter lorem epsome ' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} />
                                    </View>
                                    <View style={Styles.inputView}>
                                        <TextInput placeholder='Rnter lorem epsome' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} />
                                    </View>
                                    <View style={Styles.inputView}>
                                        <TextInput placeholder='Nickname' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} />
                                    </View>
                                    <View style={Styles.btn}>
                                        <Button button="Continue" onPress={() => props.navigation.navigate('SecurityCode2')} />
                                    </View>

                                </View>

                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', marginTop: '40%' }}>
                            <Footer footer2 />
                        </View>



                    </ImageBackground>

                </ScrollView>

            </View>

        </View >

    )
}
const Styles = StyleSheet.create({
    main: {
        flex: 1
        ,        // backgroundColor: 'pink', 
        alignItems: 'center',
    },
    Img: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    content: {

        alignSelf: 'center'

    },

    centerView: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 10
    },

    txtView: { width: '100%', margin: 10 },

    txt: { fontSize: 14, },

    inputView: {
        marginTop: 15, width: '90%', height: 60,
        borderRadius: 10, borderColor: '#F26722', borderWidth: 1, backgroundColor: '#fff',
        padding: 10
    },

    btn: { width: '90%', marginTop: 15 }

})

export default YourBill;