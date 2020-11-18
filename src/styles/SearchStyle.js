import { StyleSheet } from "react-native";

export const searchBarStyle = StyleSheet.create({
	searchBar: {
		backgroundColor: "rgba(239, 243, 249, 1)",
		borderRadius: 10,
		
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 18,
		paddingRight: 18,
		paddingTop: 14,
		paddingBottom: 14
		
	},
	searchIcon: {
		color: "rgba(0,0,0, 0.6)"
	},
	searchInput: {
		color: "rgba(0,0,0, 0.6)",
		marginLeft: 10,
		flex: 1,
	}
})