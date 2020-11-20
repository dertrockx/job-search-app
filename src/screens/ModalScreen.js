import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { textStyles } from "../styles/TextStyles";


import CustomButton from "../components/CustomButton";


const ModalScreen = ({ navigation }) => (
	<View 
		style={{ 
			flex: 1, 
			alignItems: "center",
			justifyContent: "flex-end",
			
			height: "80%"
			}}
		>


		<View
			style={{
				height: "80%",
				width: "100%",
				backgroundColor: "rgba( 255, 255, 255, 1)",
				borderTopLeftRadius: 30,
				borderTopRightRadius: 30,
				padding: 35,
				alignItems: "center"
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
			<View style={{ backgroundColor: "red", height: "100%", width: "100%", marginTop: 30 }}>
				<Text style={{ ...textStyles.heading3 }}>
					Requirements
				</Text>
			</View>
		</View>
	</View>
	)

export default ModalScreen;