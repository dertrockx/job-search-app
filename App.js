import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// fonts loading
import { AppLoading } from "expo";
import { useFonts, 
  Roboto_900Black,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import { Nunito_400Regular, Nunito_300Light } from "@expo-google-fonts/nunito";
import RootStack from "./src/stacks/RootStack";


const Tab = createBottomTabNavigator();



export default function App() {
  let [ fontsLoaded ] = useFonts({
    Roboto_900Black,
    Roboto_700Bold,
    Nunito_400Regular,
    Nunito_300Light
  })
  if (!fontsLoaded){
    return <AppLoading />;
  } else 
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
}

