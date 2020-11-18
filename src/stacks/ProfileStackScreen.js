import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator()

const { Navigator, Screen } = ProfileStack;

export default function ProfileStackScreen() {
	return(
		<Navigator initialRouteName="Profile">
			<Screen name="Profile" component={ProfileScreen} />
		</Navigator>
		)
}