import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScreenContainer } from "react-native-screens";

const Cart = ({route}) => {
  console.log(route)
  return (
    <View style={styles.center}>
      <Text>This is the Cart screen {route.name}</Text>
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

export default Cart;