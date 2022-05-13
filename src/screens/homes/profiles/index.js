import { View, Text, ImageBackground, StyleSheet, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import { Footer, Header, Inputs, Input2 } from '../../../components'
import { TextInput, Colors } from 'react-native-paper'
import { Images } from '../../../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profiles = (props) => {


    return (
        <View>
            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
                <View style={{ marginTop: 30, width: '100%', alignSelf: 'center' }}>
                    <Header text='My Profile' navigation={props.navigation} />
                </View>

                <ImageBackground source={Images.Background.Background1} resizeMode="stretch" style={styles.bgView}>

                    <View style={{ width: '90%', alignSelf: 'center' }}>


                        <View style={styles.mainView}>

                            <View style={styles.box}>
                                <TouchableOpacity style={styles.img}>

                                    <Image source={Images.Icons.profile}
                                        style={{ width: '100%', height: '100%' }} />
                                    <Text style={styles.txt}>Edit Profile Pic</Text>
                                </TouchableOpacity>

                                <View style={styles.inputView}>
                                    <View style={{ width: '100%', alignSelf: 'center', marginTop: 20, }}>

                                        <View style={{ marginVertical: 5, }}>
                                            <Input2 placeholder="Full Name" icon='square-edit-outline' color1="#F26A26" />
                                        </View>
                                        <View style={{ marginVertical: 12 }}>
                                            <Input2 placeholder="Email" icon='square-edit-outline' color1="#F26A26" />
                                        </View>
                                        <View style={{ marginVertical: 12 }}>
                                            <Input2 placeholder="Phone No." icon='square-edit-outline' color1="#F26A26" />
                                        </View>
                                        <View style={{ marginVertical: 12 }}>
                                            <Input2 placeholder="Address" icon='square-edit-outline' color1="#F26A26" />
                                        </View>
                                        <Input2 placeholder="DOB" icon='square-edit-outline' color1="#F26A26" />
                                        <View style={{ marginVertical: 12 }}>
                                            <Inputs placeholder="Password" icon='square-edit-outline' color1="#F26A26" />
                                        </View>
                                    </View>

                                </View>
                            </View>
                            <View>
                                <Footer footer2 />
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </ScrollView>
        </View>



    )
}

const styles = StyleSheet.create(
    {
        bgView: {
            flex: 1,
            // backgroundColor: 'green',

        },
        mainView: {
            width: '100%',
            height: '100%',
            // backgroundColor: 'grey', 
            alignSelf: 'center'
        },
        inputView: {
            width: '95%', alignSelf: 'center', marginTop: 10,
        },
        box: {
            width: '100%',
            height: 700,
            backgroundColor: '#EFEFEF',
            elevation: 4,
            borderRadius: 10,
        },
        img: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: 133,
            height: 133,



        },
        txt: {
            color: '#F26A26', fontSize: 14,
            alignSelf: 'center',
            marginTop: -20
        },
        input: {
            borderRadius: 10, borderWidth: 1,
            marginTop: 10


        },

    }
)

export default Profiles;
