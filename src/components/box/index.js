import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { PopUp } from '../popup';

const Box = (props) => {
    const { text, text1, text2, text3, text4 } = (props)
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <View style={Styles.centerView}>
                <Text>{text}</Text>
                <View style={Styles.Box}>
                    <View style={Styles.box}>
                        <Text style={{ color: '#000000', fontWeight: '400' }}>
                            {text1}
                        </Text>

                        <Text>
                            {text2}

                        </Text>
                    </View>
                    <TouchableOpacity style={Styles.box1}>
                        <Text style={{ color: '#F26D2B', fontSize: 14 }}>
                            {text3}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible), props.navigation.navigate('HomeScreen') }} style={{
                        backgroundColor: '#f26d2b', width: 80, height: 30, borderRadius: 5,
                        marginTop: 20, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ color: '#fff' }}>View</Text>
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <PopUp onPress={() => { setModalVisible(false) }}
                        visible={modalVisible}

                    />

                </View>





            </View>


        </View >
    )
}

export { Box }

const Styles = StyleSheet.create({
    centerView: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 15
    },
    Box:
    {
        backgroundColor: '#EFEFEF', borderRadius: 10, marginTop: 10,
        width: '100%', height: 64, flexDirection: 'row', elevation: 3
    },
    box: {
        width: '55%',
        // backgroundColor: 'red',
        justifyContent: 'center',
        padding: 15


    },
    box1: {
        width: '20%',
        // backgroundColor: 'green',
        justifyContent: 'center',


    },
    box2: {
        width: '20%',
        // backgroundColor: 'pink',
        justifyContent: 'center',


    },
    btn: {
        width: 82,
        height: 31,
        backgroundColor: '#F26722',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',



    }

})