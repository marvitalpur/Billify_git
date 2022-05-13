import { StyleSheet, Text, View, ImageBackground, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react';
import ThreeDotsLoader from 'react-native-three-dots-loader';
import { Button } from '../../../components';
import { Images } from '../../../constants';


const Loader = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('OtpScreen');
        }, 1000);
    }, [])

    // setTimeout(() => { ; }, 3000);


    return (
        <View style={styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />

            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <ImageBackground source={Images.Background.Background3}
                    resizeMode="stretch" style={styles.background}>

                    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                        <ThreeDotsLoader />
                    </View>
                    <View>
                    </View>

                </ImageBackground>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#006BB3',
    },
    background: {
        width: '100%',
        height: '100%', justifyContent: 'center', alignItems: 'center'
    }
})

export default Loader;


