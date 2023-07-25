import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactNumber from '../screens/Contact_number'
import UserProfile from '../screens/UserProfile';
import Verify_number from '../screens/Verify_number';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator >
    <Stack.Screen name="contact" component={ContactNumber} options={{ headerShown: false }}/>
    <Stack.Screen name="verify" component={Verify_number} options={{ headerShown: false }}/> 

    <Stack.Screen name="profile" component={UserProfile} options={{ headerShown: false }}/> 
  
    </Stack.Navigator>
  )
}

export default AuthNavigator