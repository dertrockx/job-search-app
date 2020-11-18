import React from "react";
import { View, Text } from "react-native";
import { cardStyle } from "../styles/CardStyle"
import { textStyles } from "../styles/TextStyles";

const JobCard = (props) => {
	return(
		<View style={ cardStyle.card }>
			<View style={cardStyle.chip }>
				<Text style={ cardStyle.chipText }>Part-time Job</Text>
			</View>
			<Text style={{ ...textStyles.heading2, marginTop: 10 }}>Junior Franchise Manager</Text>
			<Text style={{ ...textStyles.subtitle, marginTop: 20 }}>5 Days Ago</Text>
			<View style={{ ...cardStyle.bottomChip, marginTop: 40}}>
				<View style={ cardStyle.avatar  }></View>
				<Text style={{ ...textStyles.subtitle, ...cardStyle.avatarText }}>KFCDSADSADASD</Text>
			</View>
		</View>
		)
}

export default JobCard