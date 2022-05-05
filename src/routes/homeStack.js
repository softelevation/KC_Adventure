// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '_screens';
import {defaultOptions} from './constants';
import {RoutesName} from '_routeName';
const SplashStack = createNativeStackNavigator();

function DashboardNavigator() {
  return (
    <SplashStack.Navigator
      initialRouteName={RoutesName.HOME_SCREEN}
      screenOptions={{...defaultOptions}}>
      <SplashStack.Screen
        name={RoutesName.HOME_SCREEN}
        component={SplashScreen}
      />
    </SplashStack.Navigator>
  );
}

export default DashboardNavigator;
