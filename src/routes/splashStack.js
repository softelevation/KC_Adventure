import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '_screens';
import {defaultOptions} from './constants';
import {RoutesName} from '_routeName';
const SplashStack = createNativeStackNavigator();

function SplashNavigator() {
  return (
    <SplashStack.Navigator
      initialRouteName={RoutesName.SPLASH_SCREEN}
      screenOptions={{...defaultOptions}}>
      <SplashStack.Screen
        name={RoutesName.SPLASH_SCREEN}
        component={SplashScreen}
      />
    </SplashStack.Navigator>
  );
}

export default SplashNavigator;
