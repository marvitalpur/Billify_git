import { View, Text, ImageBackground, StyleSheet, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react'
import { Footer, Header } from '../../../components';
import { Images } from '../../../constants';

const ID = (props) => {
    return (
        <View>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <View style={{ marginTop: 30 }}>
                    <Header text='Add New Bill' navigation={props.navigation} />
                </View>

                <ImageBackground source={Images.Background.Background1} resizeMode="stretch" style={Styles.main}>



                    <View style={Styles.centerView}>
                        <View style={Styles.boximg}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('YourBill') }} >
                                <Image source={Images.Icons.verizon}
                                    style={{ width: 167, height: 174 }} resizeMode="contain" />
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Image source={Images.Icons.at} resizeMode="contain"
                                    style={{ width: 167, height: 174 }} />

                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('YourBill') }}
                            >
                                <Image source={Images.Icons.Mobile}
                                    resizeMode="contain" style={{ width: 167, height: 174 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { props.navigation.navigate('YourBill') }}
                            >
                                <Image source={Images.Icons.S}
                                    resizeMode="contain" style={{ width: 167, height: 174 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: '60%' }}>
                        <Footer footer2 />
                    </View>

                </ImageBackground>
            </ScrollView>
        </View>
    )
}
const Styles = StyleSheet.create({
    main: {
        flex: 1,
        // alignItems: 'center',
    },

    centerView: {
        width: '90%', alignSelf: 'center'



    },
    boximg: {
        flexDirection: 'row', alignSelf: 'center'

    },
    box: {



    },
    box1: {



    }

})
export default ID;