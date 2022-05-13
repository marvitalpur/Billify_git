import { StyleSheet, Text, View, Image, ImageBackground, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Images } from '../../../constants';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('Intro');
        }, 1000);
    }, [])
    return (
        <View style={styles.main}>
            <StatusBar backgroundColor={'transparent'} translucent={true}
                barStyle="dark-content" />
            <View style={styles.bgView}>
                <ImageBackground source={Images.Background.Background3} resizeMode="cover"
                    style={{
                        width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'
                    }}>

                    <View style={styles.ImgView}>
                        <Image source={Images.Background.Logo}
                            resizeMode="stretch"
                            style={styles.img} />
                    </View>

                </ImageBackground>

            </View>

        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'green',
        flex: 1
    },
    bgView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3DABFF',
        justifyContent: 'center', alignItems: 'center'
    },
    ImgView: {
        width: 280, height: 100,
        justifyContent: 'center', alignItems: 'center'

    },
    img: {
        width: '100%',
        height: '100%'
    }
})