import React from "react";
import { Text, View, Button } from "react-native";

const ModalScreen = ({ navigation }) => (
	<View 
		style={{ 
			flex: 1, 
			alignItems: "center", 
			justifyContent: "center",
			backgroundColor: "rgba(0,0,0, 0.2)"
			}}
		>
		<Text style={{ fontSize: 30 }}>This is a modal!</Text>
		<Button onPress={ () => navigation.goBack() } title="Dismiss" />
	</View>
	)

export default ModalScreen;