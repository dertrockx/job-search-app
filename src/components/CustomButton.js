import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ghostDark, primary, blockButton } from "./buttons";
import PropTypes from 'prop-types'

const buttonStyles = StyleSheet.create({
	ghostDark: { ...ghostDark.button },
	ghostDarkText: { ...ghostDark.text },
	primary: { ...primary.button },
	primaryText:{ ...primary.text },
	blockButton: { ...blockButton }
})

const CustomButton = ({ onPress, title, type, block }) => {
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
			style={ chosenStyle.btn  }
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
	type: "ghost dark",
	block: false
}


CustomButton.propTypes = {
	block: PropTypes.bool,
	title: PropTypes.string,
	type: PropTypes.string,
	onPress: PropTypes.func
}
export default CustomButton;