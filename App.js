import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Navigation/DrawerNavigation';


export default function App() {
  return (
      <NavigationContainer style={styles.container}>    
         <DrawerNavigator />
         <StatusBar style="light" backgroundColor="#000"/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
