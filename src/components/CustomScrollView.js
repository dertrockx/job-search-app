import React from "react";
import { ScrollView } from "react-native";

export default function(props){
	return(
		<ScrollView horizontal contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}>
			{ props.children }
		</ScrollView>
		)
}