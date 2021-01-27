import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons'
import { MainStackNavigator} from "./StackNavigation";
import { FloatingAction } from "react-native-floating-action";
import CustomTabBar from "../Screens/TabBar";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route}) => {
  return (
    <Tab.Navigator 
    initialRouteName={'Home'}
     >
      <Tab.Screen  name="Home"  component={MainStackNavigator}   options={{ tabBarBadge: 5, 
        activeTintColor: '#9AC4F8',
        inactiveTintColor: '#000',
      }} 
       />
      <Tab.Screen  name="Browse" component={MainStackNavigator} />
      <Tab.Screen  name="Cart" component={MainStackNavigator} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;