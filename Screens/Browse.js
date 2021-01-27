import React ,{useEffect} from "react";
import { View, StyleSheet, Text ,Button } from "react-native";

const Browse = ({route,navigation}) => {
  console.log(route);
  console.log("route partmt = "+route.params);
  useEffect(() => {
    console.log("test")
  })                              
 // const { itemId, otherParam } = route.params;
  return (
    <View style={styles.center}>
      <Text>This is the Browse screen </Text>
      <Button title={route.name} onPress= { () => navigation.navigate("Cart", {Text:"gg"})} />
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

export default Browse;