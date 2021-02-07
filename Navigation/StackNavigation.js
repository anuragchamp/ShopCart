import React ,{  useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/Home";
import Cart from "../Screens/Cart";
import Browse from "../Screens/Browse";

import { AntDesign } from '@expo/vector-icons'; 
import LoginScreen from "../Screens/LoginScreen";

import Register from "../Screens/Register";
import AddItem from "../Screens/AddItem";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
 headerTitleStyle:{
  alignSelf: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
 },
  headerTintColor: "#fff",
  headerBackTitle: "Back",
};

const HomeStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
 headerTitleStyle:{
  alignSelf: 'center',
  transform:[
    {translateX: -28}
  ]
  
 },
  headerTintColor: "#fff",
  headerBackTitle: "Back",
};



const MainStackNavigator = ({route,navigation}) => {
 

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={HomeStyle}>
      <Stack.Screen  name={route.name}  component={(route.name === "Home")? Home : (route.name === "Browse")? Browse :(route.name === "LoginScreen")? LoginScreen:  Cart  }  options={{
          headerLeft: () => (
            <AntDesign 
               style={{padding:10 , color:"#fff"}} 
               name="menuunfold" 
               size={24} 
               onPress={ () => navigation.openDrawer()}  
            />
          ),
        }}/>
    </Stack.Navigator>
  );
}

const LoginScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen  name={"Login"} component={LoginScreen}  />
    </Stack.Navigator>
  );
}

const RegisterScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen  name={"Register"} component={Register}  />
    </Stack.Navigator>
  );
}
const AddItemScreenNavigator = ({route,navigation}) => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen  name={"AddItem"} component={AddItem}  />
    </Stack.Navigator>
  );
}



export { MainStackNavigator , LoginScreenNavigator , RegisterScreenNavigator  , AddItemScreenNavigator}