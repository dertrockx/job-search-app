import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./HomeStackScreen";
import Settings from "./SettingsStackScreen";
import Profile from "./ProfileStackScreen";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case "Home":
        // iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
        iconName = 'ios-home';
        break;
      case "Settings":
        // iconName = focused ? 'ios-list-box' : 'ios-list'
        iconName = 'ios-settings'
        break;
      case "Profile":
        iconName = "ios-contact"
        break;
    }
    return <Ionicons name={iconName} size={size} color={color} />
  },

})

const tabBarOptions = {
  activeTintColor: 'rgba(39, 140, 194, 0.7)',
  inactiveTintColor: 'rgba(0,0,0, 0.3)',
  safeAreaInsets: {
    top: 11,
    bottom: 12,
  },
  style: {
    backgroundColor: "rgba(234, 243, 249, 1)" 
  }
}

const AppTabs = () => (
	<Tab.Navigator
    screenOptions={ screenOptions }
    tabBarOptions={ tabBarOptions }
    >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
	)

export default AppTabs;