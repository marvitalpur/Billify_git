import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, } from 'react-native';
import { Button, Input2, Inputs } from '../../../components';
import { Images } from '../../../constants';
<StatusBar backgroundColor={'#3DABFF'} />


const SignUp = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: '#3DABFF' }}>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar backgroundColor={'#3DABFF'} barStyle={'dark-content'} />

                <View style={styles.ImgView}>
                    <Image source={Images.Background.Logo}
                        resizeMode='contain'
                        style={styles.img} />
                </View>
                <View style={{
                    width: '100%', backgroundColor: '#fff',
                    height: '100%', borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    elevation: 4
                }}>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 30, }}>
                        <View>
                            <Text style={{ fontSize: 34, fontWeight: 'bold', color: '#2A2A2A' }}>Sign Up</Text>
                        </View>
                        <Input2 placeholder="Full Name" />
                        <Input2 placeholder="Email" />
                        <Input2 placeholder="Phone No." />
                        <Input2 placeholder="DOB" icon='calendar' />
                        <Inputs placeholder="Password" />
                        <Inputs placeholder="Confirm Password" />
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
                        <Button button="Sign Up" onPress={() => { props.navigation.navigate('Home', { screen: 'Loader' }) }} />
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: 20, flexDirection: 'row' }}>
                        <Text style={{ color: '#4B4B4B', fontSize: 20 }}>Already have an account!
                        </Text>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}>
                            <Text style={{ color: '#2592E2', fontSize: 20 }}> Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    main: {

    },
    center: {

    },

    ImgView: {
        width: '100%', height: 140, marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img:
        { width: '70%', height: 100 },

})

export default SignUp;