import React from "react";
import { View, Text } from "react-native";
import { cardStyle } from "../styles/CardStyle";

const Chip = ({ type, text }) => {
	let style;
	switch( type ){
		case 1:
			style = {
				chip: cardStyle.chip1,
				chipText: cardStyle.chipText1
			}
			break;
		case 2:
			style = {
				chip: cardStyle.chip2,
				chipText: cardStyle.chipText2
			}
			break;
		default:
			style = {
				chip: cardStyle.chip3,
				chipText: cardStyle.chipText3
			}
			break;
	}
	return(
		<View style={ style.chip }>
			<Text style={ style.chipText }>{ text }</Text>
		</View>
		)
}

export default Chip;