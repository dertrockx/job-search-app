
import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { textStyles } from "../styles/TextStyles";


import CustomButton from "../components/CustomButton";

const BulletListItem = ({ children }) => (
	<View
		style={{
			justifyContent: "flex-start",
			flexDirection: "row",
			marginBottom: 10
		}}
		>
		<View style={{ 
			width: 7.5, 
			height: 7.5, 
			borderRadius: 50, 
			backgroundColor: "rgba(0,0,0, 0.6)",
			marginRight: 10,
			marginTop: 10
			}} 
		/>
		<Text style={{ ...textStyles.paragrah, lineHeight: 20, color: "rgba(0,0,0, 0.6)" }}>
			{ children }
		</Text>
	</View>	
)



const BulletList = ({ content }) => {
	return(
		<View>
			{ content.map( (text, idx) => (
				<BulletListItem key={idx}>
					{ text }
				</BulletListItem>
			))}
		</View>
	)
}

const ModalScreen = ({ navigation }) => (
	<View
	style={{
		padding: 35,
		alignItems: 'center'
	}}
	>
		<View
			style={{
				width: 100,
				height: 8,
				borderRadius: 30,
				backgroundColor: "#EFF3F9"
				}}
			>
		</View>
		<Image 
			source={{
				uri: "https://i.pinimg.com/originals/23/e6/64/23e664116abe4788c7d8750ab9379b5f.png"
				}}
			style={{
				width: 55,
				height: 55,
				borderRadius: 50,
				marginTop: 30,
				
				}}
		/>
		<Text style={{ ...textStyles.heading2, marginBottom: 10, marginTop: 10 }}>
			Junior Web Designer
		</Text>
		<Text style={{ ...textStyles.subtitle, color: "rgba(0, 0, 0, 0.3)" }}>
			Makati, Philippines
		</Text>
		<View style={{ 
			marginTop: 20, 
			
			width: "100%",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center"
			}}
			>
			{/* <View style={{ backgroundColor: "blue", height: 50, width: 50 }}></View> */}
			<CustomButton 
				title="Contract"
			/>
			<Text style={ textStyles.subtitle } >
				₱ 70K / mo
			</Text>
		</View>
		<View style={{  width: "100%", marginTop: 30 }}>
			<Text style={{ ...textStyles.heading3, marginBottom: 20 }}>
				Requirements:
			</Text>
			<BulletList 
				content={[
					"Nostrud labore et mollit ex aliquip sint occaecat exercitation. Ad amet enim do laboris ad excepteur fugiat voluptate aliquip fugiat. Ea eiusmod consequat pariatur nisi laborum consectetur laborum eu sint. Exercitation aute nostrud quis ipsum qui. Est qui nulla reprehenderit deserunt culpa cupidatat occaecat esse.",
					"Nostrud labore et mollit ex aliquip sint occaecat exercitation. Ad amet enim do laboris ad excepteur fugiat voluptate aliquip fugiat. Ea eiusmod consequat pariatur nisi laborum consectetur laborum eu sint. Exercitation aute nostrud quis ipsum qui. Est qui nulla reprehenderit deserunt culpa cupidatat occaecat esse.",
					"Nostrud labore et mollit ex aliquip sint occaecat exercitation. Ad amet enim do laboris ad excepteur fugiat voluptate aliquip fugiat. Ea eiusmod consequat pariatur nisi laborum consectetur laborum eu sint. Exercitation aute nostrud quis ipsum qui. Est qui nulla reprehenderit deserunt culpa cupidatat occaecat esse."
				]}
			/>
		</View>
		<View style={{ marginTop: 20, width: "100%" }}>
			<CustomButton 
				onPress={ () => alert("Applied!") }
				title="Apply Now"
				type="primary"
			/>
		</View>
	</View>
	)

export default ModalScreen;