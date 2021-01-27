import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
// import fire from './firbase'

export default function Register() {

  // const[email , setemail] =  useState("")
  // const[password , setPassword] =  useState("")

  // const handlesignup = () => {
  //   fire
  //   .auth()
  //   .createUserWithEmailAndPassword(email,passsword)

  // };

  return (
    <Form>
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.txtcontainerL}>
        <Text style={styles.txtshadow}>Full Name</Text>
      </View>

      <TextInput  
            style={styles.inputText}
            placeholder="(E.g.: Anurag Chhaperwal)" 
            placeholderTextColor="#fff"
      />

      <View style={styles.txtcontainerL}>
        <Text style={styles.txtshadow}>Email</Text>
      </View>
      <TextInput  
            style={styles.inputText}
            placeholder="example@mail.com" 
            placeholderTextColor="#fff"
      />

      <View style={styles.txtcontainerL}>
        <Text style={styles.txtshadow}>Password</Text>
      </View>
      <TextInput  
            style={styles.inputText}
            secureTextEntry={true}
            placeholder="Enter a Strong Password" 
            placeholderTextColor="#fff"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{console.log("Pressed SignUp!")}}
      >
        <Text style={styles.txtshadow}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.txtcontainerR}>
        <TouchableOpacity
          style={styles.forgotpwdsu}
          onPress={()=>{console.log("Pressed Sign In!")}}
        >
          <Text style={styles.txtshadow}>Already have an account? Sign In</Text>
      </TouchableOpacity>
      </View>
    </View>
    </Form>
  ); 
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2471A3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: "100%",
    margin : 0,
  },
  logo:{
    height: 100,
    width: 100,
    marginBottom: 5,
    marginTop: -50
  },
  inputText:{
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#fff',
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 2,
    color: '#fff'
  },
  button: {
    width:"80%",
    backgroundColor:"#1A5276",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 10
  },
  txtcontainerR:{
    marginTop: 30,
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }, 
  txtcontainerL:{
    width: "80%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  forgotpwdsu:{
    marginEnd: "15%",
    marginStart: "15%",
    marginTop: 5,
  },
  txtshadow:{
    color: '#fff',
    textShadowColor: '#000',
    textShadowRadius: 10,
  }
});
