import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyDrawer from '../drawer';
import Splash from '../../screens/auth/Splash';
import Login from '../../screens/auth/login';
import SignUp from '../../screens/auth/sign Up';
import Intro from '../../screens/auth/intro';
import Id from '../../screens/homes/Id'
import Pay from '../../screens/homes/Paybill';
import Profile from '../../screens/homes/profile';
import Profile1 from '../../screens/homes/profile1';
import UserGuide from '../../screens/homes/user Guide';
import Privacy from '../../screens/homes/privacy';
import Conditions from '../../screens/homes/conditions';
import SecurityScreen from '../../screens/homes/SecurityScreen'
import AddCard from '../../screens/homes/Addcard';
import Bill from '../../screens/homes/Bill';
import Profiles from '../../screens/homes/profiles';
import Security from '../../screens/homes/security'
import OtpScreen from '../../screens/homes/otpScreen';
import HomeScreen from '../../screens/homes/homeScreen';
import YourBill from '../../screens/homes/yourBill';

import Loader from '../../screens/homes/loader';
import Chat from '../../screens/homes/chatScreen';
import Securitycode2 from '../../screens/homes/securityCode2';
import History from '../../screens/homes/history';
import paymentmethod from '../../screens/homes/paymentmethod';
import MyCard from '../../screens/homes/MyCard';
import Loader2 from '../../screens/homes/Loader2';

// import MyDrawer from '../drawer';
const Stack = createNativeStackNavigator();
const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="">
            <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name='Intro' component={Intro} options={{ headerShown: false }} />
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export const Home = () => {
    return (
        <Stack.Navigator initialRouteName='' >
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AddCard' component={AddCard} options={{ headerShown: false }} />
            <Stack.Screen name='Bill' component={Bill} options={{ headerShown: false }} />
            <Stack.Screen name='Security' component={Security} options={{ headerShown: false }} />
            <Stack.Screen name='OtpScreen' component={OtpScreen} options={{ headerShown: false }} />
            <Stack.Screen name='YourBill' component={YourBill} options={{ headerShown: false }} />
            <Stack.Screen name='Profiles' component={Profiles} options={{ headerShown: false }} />
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name='SecurityScreen' component={SecurityScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Profile1' component={Profile1} options={{ headerShown: false }} />
            <Stack.Screen name='Conditions' component={Conditions} options={{ headerShown: false }} />
            <Stack.Screen name='Privacy' component={Privacy} options={{ headerShown: false }} />
            <Stack.Screen name='UserGuide' component={UserGuide} options={{ headerShown: false }} />
            <Stack.Screen name='Pay' component={Pay} options={{ headerShown: false }} />
            <Stack.Screen name='Id' component={Id} options={{ headerShown: false }} />
            <Stack.Screen name='MyCard' component={MyCard} options={{ headerShown: false }} />
            <Stack.Screen name='Loader' component={Loader} options={{ headerShown: false }} />
            <Stack.Screen name='Chat' component={Chat} options={{ headerShown: false }} />
            <Stack.Screen name='Paymentmethod' component={paymentmethod} options={{ headerShown: false }} />
            <Stack.Screen name='History' component={History} options={{ headerShown: false }} />
            <Stack.Screen name='Loader2' component={Loader2} options={{ headerShown: false }} />
            <Stack.Screen name='SecurityCode2' component={Securitycode2} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name='Auth' component={Auth} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='MyDrawer' component={MyDrawer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;





