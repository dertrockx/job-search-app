import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "../screens/SettingsScreen";

const SettingsStack = createStackNavigator()

// const { Navigator, Screen } = SettingsStack;

export default function SettingsStackScreen() {
	return(
		<SettingsStack.Navigator initialRouteName="Profile">
			<SettingsStack.Screen name="Profile" component={SettingsScreen} />
		</SettingsStack.Navigator>
		)
}