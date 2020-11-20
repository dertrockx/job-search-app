import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ghostDark, primary } from "./buttons";

const buttonStyles = StyleSheet.create({
	ghostDark: { ...ghostDark.button },
	ghostDarkText: { ...ghostDark.text },
	primary: { ...primary.button },
	primaryText:{ ...primary.text }
})

const CustomButton = ({ onPress, title, type }) => {
	let chosenStyle = {
		btn: null,
		text: null
	};

	switch(type){
		case "primary":
			chosenStyle.btn = buttonStyles.primary;
			chosenStyle.text = buttonStyles.primaryText;
			break;
		case "ghost dark":
		default:
			chosenStyle.btn = buttonStyles.ghostDark;
			chosenStyle.text = buttonStyles.ghostDarkText;
			break;
	}
	console.log("YEAH")

	return(
		<TouchableOpacity
			onPress={ onPress }
			style={ chosenStyle.btn }
			>
			<Text
				style={ chosenStyle.text }
				>
				{ title } 
			</Text>
		</TouchableOpacity>
	)
}



CustomButton.defaultProps = {
	title: "Button",
	onPress: () => alert("Button pressed!"),
	type: "ghost dark"
}

export default CustomButton;