import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesName} from '_routeName';
import SplashNavigator from './splashStack';
import {defaultOptions} from './constants';
import AuthNavigator from './authStack';
import DashboardNavigator from './homeStack';
import {navigationRef} from './navigation-service';
import DrawerNavigator from './drawerNav';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{...defaultOptions}}>
        <Stack.Screen
          name={RoutesName.SPLASH_STACK_SCREEN}
          component={SplashNavigator}
        />
        <Stack.Screen
          name={RoutesName.AUTH_STACK_SCREEN}
          component={AuthNavigator}
        />
        <Stack.Screen
          name={RoutesName.DASHBOARD_STACK_SCREEN}
          component={DrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
