export const defaultStyle = {
	button: {
		paddingVertical: 7,
		paddingHorizontal: 35,
		backgroundColor: "rgba(239, 240, 249, 1)",
		elevation: 2,
		borderRadius: 10,
		alignItems: "center"
	},
	text: {
		fontSize: 18,
		fontFamily: "Roboto_700Bold",
		color: "rgba(0,0,0, 0.4)"
	}
}

export const primary = {
	button: { 
		...defaultStyle.button, 
		backgroundColor: "rgba(255, 57, 59, 1)"
	},
	text: {
		...defaultStyle.text,
		color: "rgba( 255, 255, 255, 1)"
	}
}

export const ghost = {
	button: {
		...defaultStyle.button,
		backgroundColor: "rgba( 255, 255, 255, 0)",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255, 1)"
	},
	text: {
		...defaultStyle.text,
		color: "rgba( 255, 255, 255, 1)"
	}
}

export const ghostDark = {
	button: {
		...defaultStyle.button,
		backgroundColor: "rgba( 255, 255, 255, 0)",
		borderWidth: 1,
		borderColor: "rgba(0, 0, 0, 0.4)"
	},
	text: {
		...defaultStyle.text,
		color: "rgba( 0, 0, 0, 0.4)"
	}
}

export const blockButton = {
	
	width: "100%"
}