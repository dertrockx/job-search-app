import React from "react";
import { View, Text, Image } from "react-native";
import { cardStyle } from "../styles/CardStyle"
import { textStyles } from "../styles/TextStyles";
import Chip from "./ChipComponent";

const JobCard = ({ type, title, lastPosted, company, logoUri }) => {
	let style = {};
	let chipType = 0;
	switch( type ){
		case "Part-Time":
			chipType = 1;
			break;
		case "Full-Time":
			chipType = 2;
			break;
		default:
			chipType = 3;
			break;
	}
	const logo = { uri: logoUri }
	return(
		<View style={ cardStyle.card }>
			<Chip type={ chipType } text={ `${type} Job` } />
			<Text style={{ ...textStyles.heading2, marginTop: 10 }}>{ title }</Text>
			<Text style={{ ...textStyles.subtitle, marginTop: 20 }}>{ lastPosted }</Text>
			<View style={{ ...cardStyle.bottomChip, marginTop: 40}}>
				{/* <View style={ cardStyle.avatar  }></View> */}
				<Image source={ logo } style={ cardStyle.avatar} />
				<Text style={{ ...textStyles.subtitle, ...cardStyle.avatarText }}>{ company }</Text>
			</View>
		</View>
		)
}

export default JobCard