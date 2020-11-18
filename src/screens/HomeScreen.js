import * as React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";

import CustomScrollView from "../components/CustomScrollView";

import SearchBarComponent from "../components/SearchBarComponent";
import JobCard from "../components/JobCardComponent";
import CategoryCard from "../components/CategoryCardComponent";

function HomeScreen({ navigation }) {
  return (
  	<View style={ styles.wrapper }>
    	<ScrollView contentContainerStyle={ styles.container }>
    		<Text style={{ ...textStyles.heading1, marginBottom: 20 }}>Find your Job</Text>
	      <SearchBarComponent />
	      
	      <View>
	      	<Text style={{ ...textStyles.heading2, marginTop: 40, marginBottom: 20 }}>Popular Search</Text>
	      </View>
	      <CustomScrollView>
	      	<JobCard 
	      		type="Part-Time" 
	      		title="Junior Franchise Manager" 
	      		lastPosted="5 days ago" 
	      		company="KFC"
	      	/>	
	      	<JobCard 
	      		type="Full-Time" 
	      		title="Senior Project Manager" 
	      		lastPosted="6 days ago"
	      		company="Google"
	      	/>	
	      	<JobCard 
	      		type="Full-Time" 
	      		title="Visual Product Designer" 
	      		lastPosted="3 days ago"
	      		company="Airbnb"
	      	/>	
	      </CustomScrollView>
	      <View>
	      	<Text style={{ ...textStyles.heading2, marginTop: 40, marginBottom: 20 }}>Categories</Text>
	      </View>
	      <CustomScrollView>
	      	<CategoryCard type="designer" />
	      	<CategoryCard type="developer" />
	      	<CategoryCard type="accounting" />
	      </CustomScrollView>
    	</ScrollView>
  	</View>
  );
}


export default HomeScreen;