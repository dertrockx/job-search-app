import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
	card: {
		maxWidth: 271,
    maxHeight: 240,
		padding: 20,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 10,  
    elevation: 3,
    
	},
	chip: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 13,
		paddingRight: 13,
		backgroundColor: "rgba(35, 155, 144, 0.2)",
		alignSelf: 'flex-start',
		borderRadius: 50
	},
	chipText: {
		color: "rgb(35, 155, 144)",
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