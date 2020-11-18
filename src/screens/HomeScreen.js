import * as React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";

import SearchBarComponent from "../components/SearchBarComponent";
import JobCard from "../components/JobCardComponent";

function HomeScreen({ navigation }) {
  return (
  	<View style={ styles.wrapper }>
    	<View style={ styles.container }>
    		<Text style={{ ...textStyles.heading1, marginBottom: 20 }}>Find your Job</Text>
	      <SearchBarComponent />
	      
	      <View>
	      	<Text style={{ ...textStyles.heading2, marginTop: 40, marginBottom: 20 }}>Popular Search</Text>
	      </View>
	      
	      <JobCard />

    	</View>
  	</View>
  );
}


export default HomeScreen;