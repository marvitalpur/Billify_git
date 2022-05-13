import React from 'react';
import { View, Text, Image, StatusBar, ScrollView, Appearance } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Images } from '../../constants';
import { Footer } from '../../components';


const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    let colorScheme = Appearance.getColorScheme()
    console.log(colorScheme)
    return (
        <View style={{ flex: 1, justifyContent: 'center', opacity: 0.9 }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle="dark-content" />

            <ScrollView keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                    <View style={{ width: 200, height: 100, alignSelf: 'center', }}>
                        <Image source={Images.Background.bili3} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={{ marginTop: 20, padding: 20, }}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('YourBill') }} style={{ flexDirection: 'row', padding: 10, }}>
                            <Image source={require('../../assets/Path.png')} />
                            <Text style={{ paddingLeft: 10, color: colorScheme = "dark" ? "black" : "black" }}>Add New Bill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('SecurityScreen') }} style={{ flexDirection: 'row', padding: 10, }}>
                            <Image source={require('../../assets/paper.png')} />
                            <Text style={{ paddingLeft: 10, color: colorScheme = "dark" ? "black" : "black" }}>Billing History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('MyCard') }} style={{ flexDirection: 'row', padding: 10, }}>
                            <Image source={require('../../assets/credit-card.png')} />
                            <Text style={{ paddingLeft: 10, color: colorScheme = "dark" ? "black" : "black" }}>My Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Profiles') }} style={{ flexDirection: 'row', padding: 10, }}>
                            <Image source={require('../../assets/person.png')} />
                            <Text style={{ paddingLeft: 10, color: colorScheme = "dark" ? "black" : "black" }}>My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Profile1') }} style={{ flexDirection: 'row', padding: 10, }}>
                            <Image source={require('../../assets/help.png')} />
                            <Text style={{ paddingLeft: 10, color: colorScheme = "dark" ? "black" : "black" }}>Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { props.navigation.replace('Auth', { screen: 'Login' }) }} style={{ flexDirection: 'row', padding: 10, }}>
                            <Image source={require('../../assets/logout.png')} />
                            <Text style={{ paddingLeft: 10, color: colorScheme = "dark" ? "black" : "black" }}>Sign out</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollView>
            <View style={{}}>
                <Footer footer2 />
            </View>
        </View >
    )
}

export { CustomDrawer }


function MyDrawer() {
    return (
        <Drawer.Navigator useLegacyImplementation={true} screenOptions={{
            drawerPosition: 'right',
            // defaultStatus: 'closed'

        }} drawer drawerContent={(props) => <CustomDrawer {...props} />} >
            <Drawer.Screen name='Homes' component={Home} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;