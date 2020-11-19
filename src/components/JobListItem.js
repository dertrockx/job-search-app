import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";
import { useNavigation } from "@react-navigation/native";

import Chip from "../components/ChipComponent";

const JobListItem = ({ title, salaryPerMonth, lastPosted, company, logoUri}) => {
	const navigation = useNavigation();
	return(
		<TouchableOpacity
			onPress={ () => navigation.navigate('Modal') }
			style={{ 
			flexDirection: "row",
			maxHeight: 190,
			paddingTop: 20,
			paddingBottom: 20,
			}}>
			<Image 
				style={{ width: 55, height: 55 }} 
				source={{ uri: logoUri }}
			/>
			<View style={{
				flexShrink: 1,
				marginLeft: 20
				}}>
				<Text style={ textStyles.heading2 }>{ title }</Text>
				<Text style={{ 
					...textStyles.paragraph, 
					marginTop: 10,
					marginBottom: 20
					}}
				>
					{ lastPosted }
				</Text>
				<View
					style={{
						flexDirection: "row",
				    justifyContent: "space-between",
				    alignItems: "center",
						}}
					>
					<Chip type={3} text={ `${salaryPerMonth} / mo` }/>
					<Text style={textStyles.paragraph}>{ lastPosted }</Text>
				</View>
			</View>
		</TouchableOpacity>
		)
}
export default JobListItem;