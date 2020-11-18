import React from "react";
import { View, Text } from "react-native";
import { categoryCardStyles } from "../styles/CategoryCardStyles";
import { textStyles } from "../styles/TextStyles";
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = ({ type }) => {
	let icon, title;
	switch(type){
		case "designer":
			icon = {
				name: "ios-color-palette",
				size: 45,
				color: "rgba(35, 155, 144, 1)"
			}
			title = "Designers"
			break;
		case "developer":
			icon = {
				name: "ios-code",
				size: 45,
				color: "rgba(255, 57, 59, 1)"
			}
			title = "Developers"
			break;
		case "accounting":
		default:
			icon = {
				name: "ios-calculator",
				size: 45,
				color: "rgba(39, 140, 194,1 )"
			}
			title = "Accounting"
			break;
	}
	
	return(
		<View style={ categoryCardStyles.card }>
			<View 
				style={{ 
					width: 64, 
					height: 64,
					borderRadius: 50, 
					marginBottom: 10, 
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: icon.color
				}}
				>
				<Ionicons name={icon.name} size={ icon.size } color="#fff" />
			</View>
			<Text style={ textStyles.subtitle }>{ title }</Text>
		</View>
		)
}

export default CategoryCard;