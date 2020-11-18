// for react navigation
import "react-native-gesture-handler";

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) { 
	return(
		<View style={ styles.container }>
			<Text>Home Screen</Text>
			<Button 
				title="Go to Details"
				onPress={ () => navigation.navigate("Details", { itemId: 86, otherParam: "Blblblb" }) }
			/>
		</View>
		)
}

function DetailsScreen({ route, navigation }) {
	// getting the params
	const { itemId, otherParam } = route.params;

	return(
		<View style={ styles.container }>
			<Text>Details Screen</Text>
			<Text>
				itemId: { JSON.stringify(itemId) }
			</Text>
			<Text>
				otherParam: { JSON.stringify(otherParam) }
			</Text>
			<Button 
				title="Go to details, again..."
				onPress={ () => navigation.push("Details", { itemId: Math.floor( Math.random() * 100 ) })}
			/>
			<Button title="Go Home" onPress={ () => navigation.navigate("Home") } />
			<Button title="Go Back" onPress={ () => navigation.goBack() } />
		</View>
		)
}

const Stack = createStackNavigator();

export default function App() {
  return (
  	<NavigationContainer>

	    {/* <View style={styles.container}> */}
	    {/*   <Text>Open up App.js to start working on your app!</Text> */}
	    {/*   <StatusBar style="auto" /> */}
	    {/* </View> */}
	    <Stack.Navigator initialRouteName="Home">
	    	<Stack.Screen 
	    		name="Home" 
	    		component={HomeScreen} 
	    		options={{ title: 'Overview' }}
	    	/>
	    	<Stack.Screen name="Details" component={DetailsScreen}  />
	    </Stack.Navigator>
  	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
