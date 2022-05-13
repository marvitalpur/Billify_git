import { View, Text, StyleSheet, ImageBackground, StatusBar, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import { Header, Box, Footer } from '../../../../components'
import { Icon } from 'native-base'


const BillingHistory = (props) => {
    return (
        <View style={Styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ImageBackground source={require('../../../../assets/Mask.png')} resizeMode='stretch' style={Styles.Img}>
                <ScrollView keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ marginTop: 30 }}>
                        <Header navigation={props.navigation} text="Billing History" propss={() => { props.navigation.goBack() }} />
                    </View>

                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={Styles.BoxView}>
                            <View style={Styles.whiteBox}>
                                <Text>Summary</Text>
                            </View>
                            <View style={Styles.TextBox}>
                                <Text style={{ color: '#fff' }}>Paid Bills</Text>
                            </View>
                        </View>
                        <View style={{
                            width: '100%', height: 200, marginTop: 30,
                            backgroundColor: '#fff', borderRadius: 20,
                        }}>


                            <View style={{
                                marginTop: 20,
                                width: '90%', alignSelf: 'center',
                                flexDirection: 'row',
                            }}>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>Total Amount</Text>
                                </View>

                                <View style={{ width: '30%' }}>
                                    <Text style={{ fontSize: 18, color: '#1F78B4', fontWeight: '600' }}>$1345.00</Text>
                                </View>

                            </View>
                            <View style={{
                                marginTop: 20,
                                width: '90%', alignSelf: 'center',
                                flexDirection: 'row',
                            }}>
                                <View style={{ width: '70%', }}>
                                    <Text style={{ fontSize: 12, paddingTop: 10 }}>Veni's</Text>
                                    <Text style={{ fontSize: 12, paddingTop: 10 }}>Dad's</Text>
                                    <Text style={{ fontSize: 12, paddingTop: 10 }}>Home</Text>
                                </View>

                                <View style={{ width: '30%', }}>
                                    <Text style={{ fontSize: 12, color: '#F26D2B', paddingTop: 10 }}>$1345.00</Text>
                                    <Text style={{ fontSize: 12, color: '#F26D2B', paddingTop: 10 }}>$1345.00</Text>
                                    <Text style={{ fontSize: 12, color: '#F26D2B', paddingTop: 10 }}>$1345.00</Text>
                                </View>

                            </View>


                        </View>
                        <View style={{ width: '60%', flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                            <View style={{ width: '10%' }}>
                                <Icon name='left' type='AntDesign' style={{ color: '#0D79C3', fontSize: 22, }} />
                            </View>
                            <View style={{ width: '80%', alignItems: 'center' }}>
                                <Text>January 2022</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <Icon name='right' type='AntDesign' style={{ color: '#0D79C3', fontSize: 22, }} />
                            </View>
                        </View>

                    </View>
                </ScrollView>
                <Footer footer2 />
            </ImageBackground>
        </View>
    )
}

export default BillingHistory

const Styles = StyleSheet.create({

    main: {
        flex: 1,
        alignItems: 'center',
    },
    Img: { width: '100%', height: '100%', },



    BoxView: {
        width: '100%', alignSelf: 'center', height: 60, borderRadius: 10, flexDirection: 'row',
        marginTop: 10, backgroundColor: '#F26722', alignItems: 'flex-end', justifyContent: 'center'
    },
    whiteBox: {
        width: '45%',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextBox: {
        width: '45%',
        height: 52,
        // ackgroundColor: '#F26722',
        alignItems: 'center',
        justifyContent: 'center'

    },




})