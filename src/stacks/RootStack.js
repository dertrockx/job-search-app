import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ModalScreen from "../screens/ModalScreen";
import AppTabs from "./AppTabs";

const RootStack = createStackNavigator();
// <Stack.Navigator
//   screenOptions={{
//     headerShown: false,
//     cardStyle: { backgroundColor: 'transparent' },
//     cardOverlayEnabled: true,
//     cardStyleInterpolator: ({ current: { progress } }) => ({
//       cardStyle: {
//         opacity: progress.interpolate({
//           inputRange: [0, 0.5, 0.9, 1],
//           outputRange: [0, 0.25, 0.7, 1],
//         }),
//       },
//       overlayStyle: {
//         opacity: progress.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 0.5],
//           extrapolate: 'clamp',
//         }),
//       },
//     }),
//   }}
//   mode="modal"
// >
//   <Stack.Screen name="Home" component={HomeStack} />
//   <Stack.Screen name="Modal" component={ModalScreen} />
// </Stack.Navigator>
const RootStackScreen = () => (
	<RootStack.Navigator
		screenOptions={{ 
			animationEnabled: false,
			headerShown: false,
			cardStyle: {
				backgroundColor: 'transparent'
			},
			cardOverlayEnabled: true,
			cardStyleInterpolator: ({ current: { progress }}) => ({
				cardStyle: {
					opacity: progress.interpolate({
						inputRange: [ 0, 0.5, 0.9, 1],
						outputRange: [ 0, 0.25, 0.7, 1]
					}),
				},
				overlayStyle: {
					opacity: progress.interpolate({
						inputRange: [0, 1],
						outputRange: [ 0, 0.5 ],
						extrapolate: 'clamp'
					})
				}
			})
			}}
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
				
				}}
		/>
	</RootStack.Navigator>
	)

export default RootStackScreen;