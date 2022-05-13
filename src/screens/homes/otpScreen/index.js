import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput } from 'react-native'

import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Images } from '../../../constants';


const OtpScreen = (props) => {

    const [state, setState] = React.useState(0)
    let count = 0;
    // useEffect(() => {
    //     setTimeout(() => {
    //         props.navigation.replace('MyDrawer', { screen: 'Home' })
    //     });
    // }, [])
    return (
        <View style={Styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{
                    width: '90%', marginTop: 20, alignSelf: 'center',
                    alignItems: 'center', paddingBottom: 30
                }}>
                    <View style={{ alignItems: 'center', }}>
                        <Image source={Images.Background.Logo}
                            resizeMode="contain" style={{ width: 240, height: 150 }} />
                        <View style={{ alignItems: 'center', padding: 15 }}>
                            <Text style={{ fontSize: 28, color: '#fff', fontWeight: '600' }}>Verify</Text>
                            <Text style={Styles.Text}>Enter varification code</Text>

                            <Text style={Styles.Text}>Please enter varification code</Text>
                            <Text style={Styles.Text}>Sent To +098765432</Text>
                        </View>
                    </View>
                    <OTPInputView

                        style={{ width: '65%', height: 80, alignItems: 'center' }}
                        pinCount={4}
                        code={state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        onCodeChanged={code => {
                            count = count + 1
                            setState({ count })
                            count === 4 ? props.navigation.goBack() : null
                        }}

                        autoFocusOnLoad={false}
                        codeInputFieldStyle={Styles.underlineStyleBase}

                        // TextField={keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number)}
                        codeInputHighlightStyle={Styles.underlineStyleHighLighted}
                        onCodeFilled={() => {

                            props.navigation.navigate('Loader2')

                        }}
                    />

                    <View style={{ marginTop: 35 }}>
                        <Text style={Styles.Text}>Didn't get the code! Resend</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const Styles = StyleSheet.create({
    Text:
        { fontSize: 17, color: '#fff', },
    main: {
        flex: 1,
        backgroundColor: '#006BB3'

    },
    borderStyleBase: {
        width: 50,
        height: 50,
    },

    // borderStyleHighLighted: {
    //     borderColor: "#03DAC6",
    // },

    underlineStyleBase: {
        width: 50,
        height: 50,
        borderRadius: 10, borderWidth: 0,

        color: '#fff',
        // borderBottomWidth: 1,
        backgroundColor: '#3DABFF',


    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
});

export default OtpScreen;

