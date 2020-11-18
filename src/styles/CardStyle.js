import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
	card: {
		maxWidth: 271,
    maxHeight: 240,
		padding: 20,
		elevation: 2.5,
		marginRight: 20,
		borderRadius: 10,
		// borderWidth: 2,
		// borderColor: "rgba(0,0,0, 0.3)"
	},
	chip1: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 13,
		paddingRight: 13,
		backgroundColor: "rgba(35, 155, 144, 0.2)",
		alignSelf: 'flex-start',
		borderRadius: 50
	},
	chipText1: {
		color: "rgb(35, 155, 144)",
		fontFamily: "Nunito_300Light",
		fontSize: 10
	},
	chip2: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 13,
		paddingRight: 13,
		backgroundColor: "rgba(255, 57, 59, 0.2)",
		alignSelf: 'flex-start',
		borderRadius: 50
	},
	chipText2: {
		color: "rgba(255, 57, 59, 1)",
		fontFamily: "Nunito_300Light",
		fontSize: 10
	},
	chip3: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 13,
		paddingRight: 13,
		backgroundColor: "rgba(39, 140, 194, 0.2)",
		alignSelf: 'flex-start',
		borderRadius: 50
	},
	chipText3: {
		color: "rgba(39, 140, 194,1 )",
		fontFamily: "Nunito_300Light",
		fontSize: 10
	},
	bottomChip: {
		
		flexDirection: "row",
		alignItems: "center"
	},
	avatar: {
		borderRadius: 50,
		height: 20,
		width: 20,
		backgroundColor: "gray"
	},
	avatarText: {
		marginLeft: 10
	}
})