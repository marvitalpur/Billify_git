
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, StatusBar, Appearance } from 'react-native';
import { Button, Header, PopUp } from "../../../components";


const Profile = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <>
            <View style={{ flex: 1, }}>
                <StatusBar backgroundColor={'transparent'} translucent={true} />

                <View style={{ width: '100%', alignSelf: 'center', height: '100%' }}>
                    <ScrollView keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ marginTop: 35 }}>
                            <Header text='Get In Touch' navigation={props.navigation} />
                        </View>

                        <View style={{ width: '90%', alignSelf: 'center' }}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>Name</Text>
                            </View>

                            <View style={{ width: '100%', height: 45, borderWidth: 1, borderRadius: 10, borderColor: '#F46F2D', marginTop: 10 }}>
                                <TextInput placeholder="Enter Your Name" placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ padding: 10 }} />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>Email</Text>
                            </View>

                            <View style={{ width: '100%', height: 45, borderWidth: 1, borderRadius: 10, borderColor: '#F46F2D', marginTop: 10 }}>
                                <TextInput placeholder="Enter Your Email" placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ padding: 10 }} />

                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: 18, color: '#000000', fontWeight: '500' }}>Your Message</Text>
                            </View>
                            <View style={{ width: '100%', height: 100, borderWidth: 1, borderRadius: 10, borderColor: '#F46F2D', marginTop: 10 }}>
                                <TextInput placeholder="Type Your Message" placeholderTextColor={colorScheme = "dark" ? "grey" : "grey"} style={{ padding: 10 }} />
                            </View>
                            <View style={{ marginVertical: 30 }}>
                                <Button button="Submit"
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>

        </>



    )
}



export default Profile