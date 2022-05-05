// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignUpScreen} from '_screens';
import {defaultOptions} from './constants';
import {RoutesName} from '_routeName';
const SplashStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <SplashStack.Navigator
      initialRouteName={RoutesName.LOGIN_SCREEN}
      screenOptions={{...defaultOptions}}>
      <SplashStack.Screen
        name={RoutesName.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <SplashStack.Screen
        name={RoutesName.SIGNUP_SCREEN}
        component={SignUpScreen}
      />
    </SplashStack.Navigator>
  );
}

export default AuthNavigator;
