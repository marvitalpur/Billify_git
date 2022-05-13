import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, StatusBar, TouchableOpacity, Appearance } from 'react-native'
import React from 'react'
import { Button, Footer, Header } from '../../../components'
import { Images } from '../../../constants'

const PayBill = (props) => {
    console.log({ props })
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <ScrollView keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <View style={{ marginTop: 30 }}>
                <Header text='Pay Your Bill' navigation={props.navigation} />
            </View>
            <ImageBackground source={Images.Background.Background1} style={{ flex: 1 }} resizeMode={'stretch'} >

                <View style={styles.mainView}>

                    <View style={styles.content}>
                        <View style={styles.Img}>
                            <Image source={Images.Icons.text} />
                        </View>
                        <View style={styles.mainText}>
                            <View style={styles.text1}>
                                <Text style={styles.txt}>Account ID</Text>
                                <Text style={{ color: colorScheme = "dark" ? "black" : "black" }} >#12368494947</Text>
                            </View>
                            <View style={styles.text1}>
                                <Text style={styles.txt}>Account Name</Text>
                                <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}>Veni Paul</Text>
                            </View>
                            <View style={styles.text1}>
                                <Text style={styles.txt}>Bill Date</Text>
                                <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}> 7-Feb-2022</Text>
                            </View>
                            <View style={styles.text1}>
                                <Text style={styles.txt}>Due Date</Text>
                                <Text style={{ color: colorScheme = "dark" ? "black" : "black" }}> 20-Feb-2022</Text>
                            </View>
                            <View style={styles.text1}>
                                <Text style={styles.txt2}>Amount</Text>
                                <Text style={{ fontWeight: 'bold', color: '#000' }}>$130.00</Text>
                            </View>
                        </View>
                        <View style={styles.btn}>
                            <Button button="Pay Now" onPress={() => props.navigation.navigate('MyCard')}
                            />
                        </View>


                    </View>
                    <View style={styles.footer2}>
                        <Footer footer2 />
                    </View>

                </View>



            </ImageBackground >
        </ScrollView>
    )
}

export default PayBill;

const styles = StyleSheet.create({
    mainView: {
        width: '90%', height: '100%', alignSelf: 'center'

    },
    content: {
        width: '100%', height: 500, backgroundColor: '#FFFFFF', borderRadius: 4, elevation: 10, paddingLeft: 20

    },
    Img: {
        width: '100%', alignItems: 'center', marginTop: 30
    },
    mainText: {
        padding: 20, marginTop: 10,
    },
    text1: {
        margin: 5
    },
    txt: {
        fontWeight: 'bold', color: '#000'
    },
    txt2: {
        color: '#F26722',
        fontWeight: '600'

    },
    btn: {
        width: '90%', position: 'absolute', bottom: 20, alignSelf: 'center'

    },
    footer2: {
        marginTop: '30%'

    }
})