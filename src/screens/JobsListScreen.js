	
import * as React from 'react';
import { Text, View, Button, FlatList, Image } from 'react-native';
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";

import JobList from "../components/JobListComponent";


function JobsListScreen({ route, navigation }) {

	const Header = () => ( 
		<View style={{ marginBottom: 20 }}>
			<Text style={{ ...textStyles.heading1, marginBottom: 10 }}>Jobs List</Text>
			<Text style={ textStyles.subtitle }>12 Job Openings</Text>
		</View>
		)

	
  return (
  	<View style={ styles.wrapper }>	
    		{/* <FlatList  */}
    		{/* 	data={ Jobs } */}
    		{/* 	renderItem={ ({ item }) => ( */}
    		{/* 		<ItemCard {...item} /> */}
    		{/* 		)} */}
    		{/* 	ListHeaderComponent={ Header } */}
    		{/* 	ItemSeparatorComponent={ ItemSeperator } */}
    		{/* 	keyExtractor={ (item) => item.id } */}
    		{/* 	contentContainerStyle={ styles.container } */}
    		{/* /> */}
    	<JobList 
    		header={ Header }
    	/>
  	</View>
  );
}


export default JobsListScreen;