import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Card, Footer, Header } from '../../../components';
import { Icon } from 'native-base';
import { Images } from '../../../constants';

const HomeScreen = (props) => {
    console.log(props)
    return (
        <View style={styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle="dark-content" />

            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <ImageBackground source={Images.Background.Background2} resizeMode='stretch' style={styles.bg}>
                    <View style={{ height: '100%', width: '100%', paddingBottom: 3 }}>

                        <View style={{ width: '90%', alignSelf: 'center', marginTop: 36 }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                <View style={{ marginVertical: 8 }}>
                                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: '400', }}>Welome to</Text>
                                    <View style={{ height: 100 }}>
                                        <Text style={{ fontSize: 35, color: '#fff', fontWeight: '600' }}>BILLIFY</Text>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <TouchableOpacity style={{
                                        width: 44, height: 24, borderRadius: 20, marginTop: 6,
                                        backgroundColor: '#F36D2B', flexDirection: 'row', justifyContent: 'center'
                                    }}>
                                        <Text style={{ color: '#fff', fontSize: 13, }}>2</Text>
                                        <Icon name='notifications' type='Ionicons' style={{ color: '#fff', fontSize: 22 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { props.navigation.openDrawer() }}>
                                        <Icon name='reorder-three' type='Ionicons'
                                            style={{ fontSize: 34, color: '#Ffff' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ width: '100%', justifyContent: 'flex-end', marginTop: 15 }}>
                                <Text style={{ fontSize: 24, color: '#fff', fontWeight: '400' }}>Hi Vani!</Text>
                                <Text style={{ fontSize: 14, color: '#fff', fontWeight: '400' }}>Billing ID :56778988</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: '18%', width: '90%', alignSelf: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '60%' }}>
                                <Text style={{ fontSize: 24, color: '#000', fontWeight: '500' }}>Quick Pay</Text>
                            </View>
                            <View style={{ width: '100%', marginBottom: 20, borderRadius: 10, flexDirection: 'row', }}>

                                <TouchableOpacity onPress={() => { props.navigation.navigate('Id') }}
                                    style={{

                                        backgroundColor: '#F36D2B', width: '40%', marginLeft: 10,
                                        flexDirection: 'row', height: 35, borderRadius: 25, justifyContent: 'center'
                                    }}>

                                    <View style={{ width: '30%', alignSelf: 'center', }}>
                                        <View style={{
                                            backgroundColor: '#3DABFF',
                                            width: 40, height: 40, justifyContent: 'center',
                                            alignItems: 'center', borderRadius: 25
                                        }}>
                                            <Icon name='payment' type='MaterialIcons' style={{ color: '#fff' }} />
                                        </View>
                                    </View>
                                    <View style={{ width: '70%', justifyContent: 'space-around' }}>
                                        <Text style={{ fontSize: 14, color: '#fff', fontWeight: '400', marginLeft: 5 }} >
                                            Add New Bill</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View style={{ width: '90%', alignSelf: 'center', height: 190 }}>

                            <View style={{ width: '100%', marginVertical: 10, }}>
                                <Card Img={Images.Icons.text} name="Vani's Phone" Number="09007860" onPress={() => { props.navigation.navigate('Bill') }} />
                            </View>

                            <View style={{ marginVertical: 35, }}>
                                <Card Img={Images.Icons.text} name="Dad's Phone" Number="09007860" />
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Card Img={Images.Icons.S2} name="Home" Number="09007860" />
                            </View>
                        </View>

                        <View style={{ marginTop: '38%' }}>
                            <Footer footer2 />
                        </View>


                    </View>



                </ImageBackground>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,





    },
    bg: {
        width: '100%',
        height: '100%',



    }
})









