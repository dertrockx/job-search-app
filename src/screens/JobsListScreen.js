import * as React from 'react';
import { Text, View, Button, ScrollView } from 'react-native';
import { styles } from "../styles/ScreenStyles";
import { textStyles } from "../styles/TextStyles";





function JobsListScreen({ navigation }) {
	
  return (
  	<View style={ styles.wrapper }>
    	<ScrollView contentContainerStyle={ styles.container }>
    		<Text style={{ ...textStyles.heading1, marginBottom: 20 }}>Find your Job</Text>
	      <SearchBarComponent />
	      
	      <View>
	      	<Text style={{ ...textStyles.heading2, marginTop: 40, marginBottom: 20 }}>Popular Search</Text>
	      </View>
	      <CustomScrollView>
	      	{ JobCardList }
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


export default JobsListScreen;