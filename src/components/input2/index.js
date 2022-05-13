import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableOpacity, } from 'react-native';
import { TextInput, } from 'react-native-paper';
import { Icon } from 'native-base';



const Input2 = ({ placeholder, icon, color1, secureTextEntry }) => {
    return (

        <View>
            <TextInput
                label={placeholder} mode='outlined' underlineColor='#868686'
                activeOutlineColor='#868686' outlineColor='#868686'

                // value={text}
                // onChangeText={text => setText(text)}
                right={<TextInput.Icon color={color1} name={icon} />}
            />
        </View>





    )
}

export { Input2 };

