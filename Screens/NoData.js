import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View , Image} from 'react-native';
import BouncingPreloader from 'react-native-bouncing-preloader';

const EmptyScreen = () =>{
    return(
        <View style={[styles.container, styles.horizontal]}>
        {/* <ActivityIndicator size="large" color="#00ff00" /> */}
        {/* <BouncingPreloader
  icons={[
    require('../Images/letter-a.png'),
    require('../Images/square.png'),
  ]}
  leftRotation="-680deg"
  rightRotation="360deg"
  leftDistance={-180}
  rightDistance={-250}
  topDistance={-1500}
  speed={1200}
  /> */}
              <Image
        style={styles.tinyLogo}
        source={require('../Images/loading.gif')}
      />

      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor:"#fff"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
     
      width:"100%",
    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
  });

export default EmptyScreen;