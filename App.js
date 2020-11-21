import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';



// fonts loading
import { AppLoading } from "expo";
import { useFonts, 
  Roboto_900Black,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";
import { Nunito_400Regular, Nunito_300Light } from "@expo-google-fonts/nunito";
import RootStack from "./src/stacks/RootStack";

import { Host } from 'react-native-portalize'



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
        <Host>
          <RootStack />
        </Host>
      </NavigationContainer>
    );
}

