// In App.js in a new project

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  AboutUs,
  ExperienceScreen,
  HelpCenter,
  NotificationScreen,
  TermsAndConditions,
  Tour,
  TourDetails,
  Wishlist,
  GuideScreen
  
} from '_screens';
import {defaultOptions} from './constants';
import {RoutesName} from '_routeName';
import DrawerScreen from 'src/common/drawer';
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      initialRouteName={RoutesName.EXPERIENCES_SCREEN}
      screenOptions={{
        ...defaultOptions,
        drawerType: 'back',
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen
        name={RoutesName.EXPERIENCES_SCREEN}
        component={ExperienceScreen}
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
        <Drawer.Screen
        name={RoutesName.GUIDE_SCREEN}
        component={GuideScreen}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
