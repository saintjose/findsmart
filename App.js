import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import HomeScreen from './screens/HomeScreen';
// import RedirectedScreen from './screens/RedirectedScreen';
import ConnexionScreen from './screens/ConnexionScreen';
import Inscrire from './screens/Inscrire'
import Dashboard from './screens/Dashboard'

const Stack = createStackNavigator();

/**
 * 
  options={
    { title: 'Base',
      headerStyle: {
        backgroundColor: 'darkblue',
      },
      headerTintColor: 'white', 
    }
    
  }
 */
const App = () => {

  // const [fontsLoaded, error] = useFonts({
  //   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  //   "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  //   "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  //   "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen
              name="Connexion"
              component={ConnexionScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Inscrire"
              component={Inscrire}
              options={{ headerShown: false }}
            />
        <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
