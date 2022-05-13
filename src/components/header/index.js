import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import React from 'react'

const Header = (props) => {
    const { propss, text, Press, navigation } = props
    console.log('what is navigation', navigation)
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} style={{}}

                >

                    <Icon name='left' type='AntDesign' style={{ color: '#0D79C3', fontSize: 22, }} />
                </TouchableOpacity>
                <View style={styles.ButtonView}>
                    <Text style={styles.HeaderTxt}>{Press}{text}</Text>
                </View>
            </View>

        </View>

    )
}

export { Header }

const styles = StyleSheet.create({

    header: {
        // backgroundColor: 'pink',
        width: '100%',
        height: 60,
        alignSelf: 'center',

    },
    row: {

        width: '90%', marginTop: 10,
        flexDirection: 'row', alignSelf: 'center'

    },
    ButtonView: {

        width: '90%', alignItems: 'center'

    },
    HeaderTxt: {
        fontSize: 18, color: '#4B4B4B'

    }

})