// In App.js in a new project

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  AboutUs,
  ExperienceScreen,
  HelpCenter,
  NotificationScreen,
  TermsAndConditions,
  Tour,
  TourDetails,
  Wishlist,
  GuideScreen,
  ExperienceDetail,
  MapsScreen,
  LoacationFound,
  LoacationDetails,
  BookRoom,
} from '_screens';
import { defaultOptions } from './constants';
import { RoutesName } from '_routeName';
import DrawerScreen from 'src/common/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const DrawerStack = createNativeStackNavigator();
const ExperinceStackNavigator = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName={RoutesName.EXPERIENCES_SCREEN}
      screenOptions={{ ...defaultOptions }}>
      <DrawerStack.Screen
        name={RoutesName.EXPERIENCES_SCREEN}
        component={ExperienceScreen}
      />
      <DrawerStack.Screen
        name={RoutesName.EXPERIENCES_DETAILS_SCREEN}
        component={ExperienceDetail}
      />
      <DrawerStack.Screen name={RoutesName.MAP_SCREEN} component={MapsScreen} />
      <DrawerStack.Screen
        name={RoutesName.LOCATION_FOUND_SCREEN}
        component={LoacationFound}
      />
      <DrawerStack.Screen
        name={RoutesName.LOCATION_DETAILS}
        component={LoacationDetails}
      />
      <DrawerStack.Screen
        name={RoutesName.ROOM_BOOK}
        component={BookRoom}
      />
    </DrawerStack.Navigator>
  );
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      initialRouteName={RoutesName.EXPERIENCES_STACK_SCREEN}
      screenOptions={{
        ...defaultOptions,
        drawerType: 'back',
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen
        name={RoutesName.EXPERIENCES_STACK_SCREEN}
        component={ExperinceStackNavigator}
      />
      <Drawer.Screen name={RoutesName.WISHLIST_SCREEN} component={Wishlist} />
      <Drawer.Screen name={RoutesName.ABOUT_US_SCREEN} component={AboutUs} />
      <Drawer.Screen
        name={RoutesName.TERMS_SCREEN}
        component={TermsAndConditions}
      />
      <Drawer.Screen
        name={RoutesName.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
      <Drawer.Screen name={RoutesName.HELP_SCREEN} component={HelpCenter} />
      <Drawer.Screen name={RoutesName.TOUR_SCREEN} component={Tour} />
      <Drawer.Screen
        name={RoutesName.TOUR_DETAILS_SCREEN}
        component={TourDetails}
      />
      <Drawer.Screen name={RoutesName.GUIDE_SCREEN} component={GuideScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
