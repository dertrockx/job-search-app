import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { View, TextInput } from "react-native";
import { searchBarStyle } from "../styles/SearchStyle";

const SearchBarComponent = (props) => {
	return (
		<View style={ searchBarStyle.searchBar }>
			<Ionicons name="ios-search" style={ searchBarStyle.searchIcon } size={24} />
			<TextInput 
				placeholder="Search"
				style={ searchBarStyle.searchInput } />
		</View>
	)
}

export default SearchBarComponent;