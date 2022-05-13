import { View, Text, TextInput, ScrollView, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, Footer, Header, PopUp, } from '../../../components'
import SecurityBox from '../../../components/securitybox';
import { Images } from '../../../constants';


const Securitycode2 = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <View style={{
                flex: 1,
                backgroundColor: modalVisible === true ? 'gray' : 'white',
            }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ width: '100%', marginTop: 30 }}>
                        <Header text='Security Code' navigation={props.navigation} />
                    </View>

                    <ImageBackground source={Images.Background.Background1}
                        style={{ width: '100%', height: '94%' }}
                        resizeMode='stretch'>


                        {modalVisible === true ? null :
                            <View>
                                <View style={styles.center}>

                                    <View style={styles.CenterView}>
                                        <View style={{ marginTop: 30 }}>
                                            <View>
                                                <SecurityBox />
                                            </View>
                                            <View style={{ marginTop: 20 }}>
                                                <Button button="Add Now" onPress={() => { props.navigation.navigate('HomeScreen') }} />
                                            </View>
                                            <View style={{ marginTop: '60%' }}>
                                                <Footer footer1 footer2
                                                    props1={() => { props.navigation.navigate('Pay') }}
                                                    props2={() => { props.navigation.navigate('Conditions') }}
                                                    props3={() => { props.navigation.navigate('Paymentmethod') }}
                                                    props4={() => { props.navigation.navigate('UserGuide') }} />
                                            </View>

                                        </View>
                                    </View>

                                </View >

                            </View>
                        }


                    </ImageBackground>
                </ScrollView>

            </View >
        </>


    )
}

export default Securitycode2;
const styles = StyleSheet.create({

    center: {
        width: '100%', alignSelf: 'center', alignItems: 'center',
        height: '100%',
    },
    CenterView: {
        width: '90%', alignSelf: 'center', height: '100%'
    },

    footerView: { width: '100%', }
}
)