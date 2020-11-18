import React from "react";
import { View, Text } from "react-native";
import { cardStyle } from "../styles/CardStyle"
import { textStyles } from "../styles/TextStyles";

const JobCard = ({ type, title, lastPosted, company }) => {
	let style = {};
	switch( type ){
		case "Part-Time":
			style = {
				chip: cardStyle.chip1,
				chipText: cardStyle.chipText1
			}
			break;
		case "Full-Time":
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
		<View style={ cardStyle.card }>
			<View style={ style.chip }>
				<Text style={ style.chipText }>{ type } Job</Text>
			</View>
			<Text style={{ ...textStyles.heading2, marginTop: 10 }}>{ title }</Text>
			<Text style={{ ...textStyles.subtitle, marginTop: 20 }}>{ lastPosted }</Text>
			<View style={{ ...cardStyle.bottomChip, marginTop: 40}}>
				<View style={ cardStyle.avatar  }></View>
				<Text style={{ ...textStyles.subtitle, ...cardStyle.avatarText }}>{ company }</Text>
			</View>
		</View>
		)
}

export default JobCard