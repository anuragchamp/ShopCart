import React, { useState , useEffect } from "react";
import axios from 'axios'
import { View ,ImageBackground,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity , Button } from "react-native";


const FltList = (props) => {
  
  return (
    <View style={{flex:0.2 , backgroundColor:"#ff0000", marginBottom: 10, }}> 
      <Text >{props.obj.Category}</Text>
      <Text>{}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:15,
  },
  mytxt: {
    fontSize: 32,
    padding: 30,
    textAlign: "center",
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.8
  },
});

export default FltList;