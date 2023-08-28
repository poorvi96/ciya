import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Homescreen from '../screens/Homescreen'
import Register from '../screens/Register'
import LoginScreen from '../screens/LoginScreen'
import Details from '../screens/Details';
import Addtocart from '../screens/Addtocart';
import AddAddress from '../screens/AddAddress';
import Address from '../screens/Address';
import Payment from '../screens/Payment';
import OrderConfirm from '../screens/OrderConfirm';

const Stack = createStackNavigator();
export default function Router(){
    return(
        <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="home" component={Homescreen}/>
                <Stack.Screen name="details" component={Details}/>
                    <Stack.Screen name="register" component={Register}/>
                    <Stack.Screen name="login" component={LoginScreen}/>
                    <Stack.Screen name="addtocart" component={Addtocart}/>
                    <Stack.Screen name="address" component={Address}/>
                    <Stack.Screen name="addaddress" component={AddAddress}/>
                    <Stack.Screen name="payment" component={Payment}/>
                    <Stack.Screen name="orderconfirm" component={OrderConfirm}/>


                </Stack.Navigator>
        </NavigationContainer>
        
    )
}