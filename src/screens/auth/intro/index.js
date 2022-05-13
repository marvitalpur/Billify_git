import React from 'react';
import {
    View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView,
    StatusBar
} from 'react-native';
import { Button } from '../../../components';
import { Images } from '../../../constants';


const Intro = (props) => {
    return (
        <View style={Styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true}
                barStyle="dark-content" />

            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>


                <View style={{
                    marginTop: 160, height: 400,
                    justifyContent: 'center', alignItems: 'center'
                }}>

                    <View style={Styles.logo}>
                        <Image source={Images.Background.Logo} resizeMode="contain"
                            style={{ width: '80%', height: 110, alignSelf: 'center' }} />
                    </View>

                    <View style={Styles.center}>
                        <View style={Styles.txtView}>
                            <Text style={Styles.txt}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Maxime mollitia,
                                molestiae quas vel sint commodi
                            </Text>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Button button="Login" onPress={() => { props.navigation.navigate('Login') }}
                            />
                            <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp') }} style={Styles.btn2}>
                                <Text style={Styles.txt2}>Register Now</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </ScrollView >
        </View >

    )
}
const Styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3DABFF',
        justifyContent: 'center',
        alignItems: 'center'


        // justifyContent: 'space-between'
    },
    center: {

        width: '90%',
        // height: '100%',


    },
    innerimg: {
        width: '100%',
        height: 100,
        // backgroundColor: 'yellow',
    },
    txtView: {
        width: '100%',
        marginVertical: 30
    },
    logo:
        { width: '100%', height: 100, },

    txt: {

        fontSize: 16,
        color: '#fff', textAlign: 'center',
    },
    txt1:
        { color: '#fff', fontSize: 20 },
    txt2: {

        color: '#3DABFF', fontSize: 20
    },

    btn1: {
        width: '100%',
        height: 60,
        backgroundColor: '#F26722',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    btn2: {
        width: '100%',
        height: 60,
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }

})
export default Intro;