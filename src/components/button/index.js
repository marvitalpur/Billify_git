import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ button, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.Button} activeOpacity={0.8}>
            <Text style={styles.Text}>{button}</Text>
        </TouchableOpacity>
    )
}
export { Button };

const styles = StyleSheet.create({
    Button: {
        alignSelf: 'center',
        backgroundColor: '#F26722', width: '100%',
        borderRadius: 10,
        height: 60, alignItems: 'center', justifyContent: 'center',
    },
    Text: {
        fontSize: 22, color: '#FAFAFA'
    }
})