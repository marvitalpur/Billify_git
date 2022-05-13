import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Footer, Header } from '../../../components';
import { Images } from '../../../constants';


const Profile1 = (props) => {
    return (
        <View style={Styles.main}>
            <ImageBackground source={Images.Background.Background1}
                resizeMode='stretch' style={Styles.mainImg}>
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar backgroundColor={'transparent'} translucent={true} />
                    <View style={{ marginTop: 30 }}>
                        <Header text='Help' navigation={props.navigation} />
                    </View>
                    <View style={Styles.box}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Pay') }} style={Styles.textBox}>
                            <Image source={Images.Icons.question} />
                            <Text style={Styles.text} >How To Pay Bill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Conditions') }} style={Styles.textBox}>
                            <Image source={Images.Icons.checkIcon} />
                            <Text style={Styles.text} >Terms & Conditions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Privacy') }} style={Styles.textBox}>
                            <Image source={Images.Icons.eye} />
                            <Text style={Styles.text} >Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Paymentmethod') }} style={Styles.textBox}>
                            <Image source={Images.Icons.payment} />
                            <Text style={Styles.text} >Payment Method</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} style={Styles.textBox}>
                            <Image source={Images.Icons.chat} />
                            <Text style={Styles.text} >Live Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Profile') }} style={Styles.textBox}>
                            <Image source={Images.Icons.headphones} />
                            <Text style={Styles.text} >Get In Touch</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: '65%' }}>
                        <Footer footer2 />
                    </View>

                </ScrollView>
            </ImageBackground>
        </View >
    )
}
const Styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    mainImg: {
        width: '100%',
        height: '100%'
    },

    box: {
        width: '90%',
        borderRadius: 25,
        height: 350,
        backgroundColor: '#fff',
        alignSelf: 'center',
        elevation: 12,
        justifyContent: 'center'
    },
    textBox: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginTop: 10
    },
    text: {
        fontSize: 17,
        color: '#4B4B4B',
        paddingLeft: 15


    }
})
export default Profile1;