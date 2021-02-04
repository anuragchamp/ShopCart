import React,{useState , useEffect} from "react";
import { View, Button, Text, StyleSheet , TextInput } from "react-native";
import axios from 'axios'
import FltList from "./FlatList";
import EmptyScreen from "./NoData";
const Home = ({navigation}) => {

   const[user , setUser ]= useState({ firstName:"Anurag" , lastName:"Chhaperwal"})
  const[ product , setProduct] = useState([]);
  const [lenValue , setLenValue] = useState(product.length);
   useEffect(()=>{
     axios.get(" http://92d05be07397.ngrok.io/log")
     .then( res => {  
       setProduct(res.data);
     })
     .catch( err => {console.log(err)})
   } , []);

   useEffect(()=>{
   setLenValue(product.length);
  } , [product.length]);
  
  return (
    <View style={styles.center}>
            <Text>{product.length}</Text>
            {( lenValue > 0) ? product.map( (item) => <FltList key={item._id} obj={item}/>) : <EmptyScreen/>}
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