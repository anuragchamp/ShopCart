import React, { useState , useEffect } from "react";
import axios from 'axios'
import { ImageBackground,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";




const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Pulses",
      image: { uri: "http://www.pulsecanada.com/wp-content/uploads/2018/01/Potential-What-is-a-Pulse-Image-min-e1515774203184.jpg" }
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Fruits",
      image: { uri: "https://picsum.photos/300/40" }
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Vegetables",
      image: { uri: "https://picsum.photos/300/41" }
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
      title: "Dairy",
      image: { uri: "https://picsum.photos/300/42" }
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f64",
      title: "Second Item",
      image: { uri: "https://picsum.photos/300/43" }
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Third Item",
      image: { uri: "https://picsum.photos/300/44" }
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bx",
      title: "First Item",
      image: { uri: "https://picsum.photos/300/45" }
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
      title: "Second Item",
      image: { uri: "https://picsum.photos/300/46" }
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d76",
      title: "Last Item",
      image: { uri: "https://picsum.photos/300/47" }
    },
  ];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <ImageBackground source={item.image} style={styles.image}>
    <Text  style={styles.mytxt}>{item.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const FltList = (props) => {
  const [selectedId, setSelectedId] = useState(null);
  const {navObj} = useState(props.obj);
   useEffect(()=>{
      fetch("http://6200f43011b3.ngrok.io/log")
      .then( res =>{  console.log(res)});
   });
  
  const renderItem = ({ item  , navObj}) => {
   

    return (
      <Item
        item={item}
        onPress={() => {
          props.obj.navigate('Browse',{ 
            screen:"Browse",
            params:{item},
          });
          setSelectedId(item.id)
        }}
        style={ styles.boxes }
      />
    );
  };

  return (
      <FlatList
        data={DATA}  
        numColumns={1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
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