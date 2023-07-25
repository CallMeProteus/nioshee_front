import React, { useContext } from 'react';
import { View } from 'react-native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { UserContext } from '../authContext/UserContext';

const RootNavigator = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  const isUserLoggedIn = false //!!user.name;

  return (
  <>
      {isUserLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </>
  );
};

export default RootNavigator;
