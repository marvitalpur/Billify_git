import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Appearance } from 'react-native'
import { Images } from '../../constants'


const Card = ({ onPress, Img, name, Number }) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View>
            <View style={{ width: '100%', height: 34, }}>
                <View style={{
                    width: '100%', height: 67,
                    backgroundColor: '#fff',
                    marginTop: 20,
                    //  backgroundColor: 'pink',
                    borderRadius: 15, flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    <View style={{
                        marginLeft: 15, width: '8%'

                    }}>
                        <Image source={Img} resizeMode="contain"
                            style={{ width: 80, height: 80, margin: 10 }} />

                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 8, justifyContent: 'flex-end' }}>
                        <View style={{ width: '42%' }}>
                            <Text style={{ textAlign: 'center', color: colorScheme = "dark" ? "black" : "black" }}>
                                {name}
                            </Text>
                            <Text style={{ textAlign: 'center', color: colorScheme = "dark" ? "black" : "black" }}>
                                {Number}
                            </Text>

                        </View>
                        <View style={{ width: '25%' }}><Text style={{

                            color: '#0D79C3', fontSize: 14, marginTop: 8
                        }}>
                            $130:00
                        </Text></View>
                    </View>



                    <TouchableOpacity onPress={onPress} style={{
                        width: '22%',
                        height: 67,
                        alignSelf: 'flex-end',
                        backgroundColor: '#F36D2B',
                        alignItems: 'center', justifyContent: 'center',
                        borderBottomRightRadius: 15, borderTopRightRadius: 15, marginLeft: 8
                    }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 14, color: '#fff', fontWeight: '300', }} >
                                Pay </Text>
                            <Text style={{ fontSize: 14, color: '#fff', fontWeight: '300', }} >
                                Now</Text>
                        </View>

                    </TouchableOpacity>


                </View>
            </View>
        </View >
    )
}

export { Card }

const styles = StyleSheet.create({})