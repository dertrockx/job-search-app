import React from "react";
import { View, Text, Image} from "react-native";
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";

import Chip from "../components/ChipComponent";

const JobListCard = ({ title, salaryPerMonth, lastPosted, company, logoUri}) => (
		<View style={{ 
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
		</View>
		)

export default JobListCard;