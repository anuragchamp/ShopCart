import React from "react";
import {Text , Label} from 'react-native'
import { createDrawerNavigator, DrawerItemList, } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation";
import  Profile from "../Screens/DrawerContent"

import { LoginScreenNavigator } from "./StackNavigation";
import { RegisterScreenNavigator } from "./StackNavigation";



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent = {  (props) => <Profile {...props} />}
    >
     <Drawer.Screen name="Home"  component={TabNavigator}   />
     <Drawer.Screen name="Login"  component={LoginScreenNavigator}   />
     <Drawer.Screen name="Register"  component={RegisterScreenNavigator}   />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;