import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Camera_App from './camera';
import HomeScreen from './HomeScreen';
import Scanner from './camera';
import ResultScreen from './results';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (

    <NavigationContainer>
      <Tab.Navigator>


        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name= "Camera" component={Scanner}/>
        <Tab.Screen name="Results" component={ResultScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
