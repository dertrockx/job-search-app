import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ModalScreen from "../screens/ModalScreen";
import AppTabs from "./AppTabs";

const RootStack = createStackNavigator();

const RootStackScreen = () => (
	<RootStack.Navigator
		headerMode="none"
		screenOptions={{ animationEnabled: false }}
		mode="modal"
		>
		<RootStack.Screen 
			name="AppTabs"
			component={ AppTabs }
		/>
		<RootStack.Screen 
			name="Modal"
			component={ ModalScreen }
			options={{ 
				animationEnabled: true,
				mode: "screen"
				}}
		/>
	</RootStack.Navigator>
	)

export default RootStackScreen;