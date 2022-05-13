
import React from 'react';
import {
    View, Text, StyleSheet, StatusBar, ImageBackground, Image, ScrollView,
    TouchableOpacity, Appearance, TextInput
} from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/colors';
import { Button } from '../../../components';
import { Images } from '../../../constants';



const Login = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (

        <View style={styles.mainView}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'transparent'} translucent={true}
                    barStyle="dark-content" />
                <View style={styles.ImgView}>
                    <Image source={Images.Background.Logo}
                        resizeMode="contain"
                        style={styles.img} />
                </View>
                <View style={styles.elevatioBox}>
                    <View style={styles.boxMainView}>
                        <View style={{}}>
                            <Text style={{
                                fontSize: 34,
                                fontWeight: 'bold',
                                color: colorScheme = "dark" ? "black" : "black"

                            }}>Login</Text></View>
                        <View style={styles.inputView}>
                            <TextInput placeholder='Username' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ padding: 22 }} />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput placeholder='Password' placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ padding: 22 }} secureTextEntry={true} />
                        </View>
                        <TouchableOpacity style={styles.pawword}>
                            <Text style={styles.passwordTxt}>
                                Forgot Password?
                            </Text></TouchableOpacity>
                        <View>
                            <Button button='Login' onPress={() => { props.navigation.replace('MyDrawer', { screen: 'Home' }) }} />
                        </View>

                        <View style={styles.createAccountView}>
                            <Text style={styles.createaccounttxt}>Create an account!
                            </Text>
                            <TouchableOpacity
                                onPress={() => { props.navigation.navigate('SignUp') }}>
                                <Text style={styles.signUP}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    )
}
export default Login;
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: '#3DABFF',

    },
    inputView: {

        borderRadius: 10,
        backgroundColor: 'greeen',
    },
    ImgView: {
        width: '100%', height: 220,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:
        { width: '70%', height: 100 },
    elevatioBox: {
        width: '100%',
        paddingBottom: 50,

        height: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        elevation: 5
    },
    boxMainView: {
        width: '90%', height: '100%',
        alignSelf: 'center', marginTop: 30

    },
    Login:
    {

    },
    inputView: {
        marginTop: 20,
        width: '100%', height: 60,
        borderRadius: 10,
        borderColor: '#868686',
        borderWidth: 1
    },
    inputTxt: {
        margin: 10


    },
    pawword: {
        width: '100%',
        marginVertical: 30,



    },
    passwordTxt: { color: '#2592E2', textAlign: 'right' },
    createAccountView: {
        alignSelf: 'center',
        marginTop: 20, flexDirection: 'row'
    },
    createaccounttxt:
        { color: '#4B4B4B', fontSize: 20 },
    signUP: {
        color: '#2592E2', fontSize: 20, marginLeft: 4
    },

},



)
