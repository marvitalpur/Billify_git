import { View, Text, TextInput, ScrollView, ImageBackground, StyleSheet, StatusBar, TouchableOpacity, Appearance } from 'react-native'
import React, { useState } from 'react'
import { Button, Footer, Header, PopUp, } from '../../../components'
import SecurityBox from '../../../components/securitybox';
import { Images } from '../../../constants';


const Security = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)

    return (
        <>
            <View style={{
                flex: 1,
                // backgroundColor: modalVisible === true ? 'gray' : 'white',
            }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ width: '100%', marginTop: 30 }}>
                        <Header text='Security Code' navigation={props.navigation} />
                    </View>
                    <ImageBackground source={Images.Background.Background1}
                        style={{ width: '100%', height: '93%', }}
                        resizeMode='stretch'>


                        {modalVisible === true ? null :
                            <View style={styles.center}>

                                <View style={styles.CenterView}>
                                    <View style={{ marginVertical: 20 }}>
                                        <View style={{ marginVertical: 15 }}>
                                            <SecurityBox />
                                        </View>
                                        <View style={{ marginVertical: 10 }}>
                                            <Button button="Submit" onPress={() => {
                                                // alert("CHAL RHA HY?")
                                                console.log("RHAHHAHAH")
                                                setModalVisible(!modalVisible)
                                            }} />
                                        </View>
                                        <View style={{ marginTop: '55%' }}>

                                            <Footer footer1 footer2
                                                props1={() => { props.navigation.navigate('Pay') }}
                                                props2={() => { props.navigation.navigate('Conditions') }}
                                                props3={() => { props.navigation.navigate('Paymentmethod') }}
                                                props4={() => { props.navigation.navigate('UserGuide') }} />
                                        </View>
                                    </View>
                                </View>
                            </View >
                        }
                        <View styles={{ paddingbottom: 30 }}>
                            <PopUp sendMsg closePopup={() => {
                                setModalVisible(false),
                                    props.navigation.navigate('HomeScreen')
                            }}
                                visible={modalVisible} />
                        </View>

                    </ImageBackground>
                </ScrollView>
            </View >
        </>
    )
}
export default Security;
const styles = StyleSheet.create({

    center: { width: '100%', height: '100%', alignSelf: 'center', alignItems: 'center', },
    CenterView: {
        width: '90%', alignSelf: 'center', height: '100%',
    },


}
)