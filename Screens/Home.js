import React,{useState} from "react";
import { View, Button, Text, StyleSheet , TextInput } from "react-native";
import FltList from "./FlatList";

const Home = ({navigation}) => {
  return (
    <View style={styles.center}>
      <FltList obj={navigation} ></FltList>
      <Button
       onPress={() => {navigation.navigate("Browse")}}
       title="Learn More"
        color="#841584"
     />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;