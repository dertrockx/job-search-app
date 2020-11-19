import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import JobsListScreen from "../screens/JobsListScreen";
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator()

// const { HomeStack.Navigator, HomeStack.Screen } = HomeStack;

export default function HomeStackScreen() {
	return(
		<HomeStack.Navigator initialRouteName="Home">
			<HomeStack.Screen 
				name="Home" 
				component={HomeScreen} 
				options={{ 
					title: '',
					headerRight: () => (
						<Ionicons 
							name="ios-notifications" 
							color="rgba(253, 182, 3, 1)" 
							size={30}
							onPress={ () => alert("Notifications!")}
							style={{ marginRight: 25 }}
							/>
						)
					}}
			/>
			<HomeStack.Screen name="Details" component={DetailsScreen} />
			<HomeStack.Screen name="JobsList" component={JobsListScreen} />
		</HomeStack.Navigator>

		)
}