import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './app/authContext/UserContext';
import RootNavigator from './app/navigation/RootNavigator';

export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
   
    <RootNavigator/>
   
 </NavigationContainer>
    </UserProvider>

  );
}
