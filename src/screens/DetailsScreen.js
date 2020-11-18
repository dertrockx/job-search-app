import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from "../styles/ScreenStyles";

function DetailsScreen({ route, navigation }) {
	const { id, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Text>id: { JSON.stringify(id) }</Text>
      <Text>otherParam: { JSON.stringify(otherParam)  }</Text>
      <Button 
      	title="Nested details..."
      	onPress={ () => navigation.push('Details', {
      		id: Math.floor( Math.random() * 100 )
      		}) }
      />
      <Button 
      	title="Go back"
      	onPress={ () => navigation.goBack() }
      />
      <Button 
      	title="Go Home"
      	onPress={ () => navigation.navigate("Home") }
      />
      <Button 
      	title="Go to Top"
      	onPress={ () => navigation.popToTop() }
      />
    </View>
  );
}


export default DetailsScreen;