// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Adventure} from '_screens';
import {defaultOptions} from './constants';
import {RoutesName} from '_routeName';
import DrawerNavigator from './drawerNav';
const Dashboard = createNativeStackNavigator();

function DashboardNavigator() {
  return (
    <Dashboard.Navigator
      initialRouteName={RoutesName.EXPERIENCES_DRAWER_SCREEN}
      screenOptions={{...defaultOptions}}>
      <Dashboard.Screen
        name={RoutesName.ADVENTURE_SCREEN}
        component={Adventure}
      />
      <Dashboard.Screen
        name={RoutesName.EXPERIENCES_DRAWER_SCREEN}
        component={DrawerNavigator}
      />
    </Dashboard.Navigator>
  );
}

export default DashboardNavigator;
