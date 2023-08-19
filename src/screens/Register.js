//hook usestate
import React, { useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TextInput, Button,ScrollView } from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import axios from 'axios'

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
export default function Register({navigation}) {
  const[fname,setFName] = useState("")
  const[lname,setLName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[cpassword,setCPassword] = useState("")


  
  async function UserRegister(){
    const params={
        "fname":fname,
        "lname":lname,
        "email":email,
        "pass":password,
        "cpass":cpassword
    }
    
    const res = await axios("http://ankursingh.xyz/api/registerUser.php",params)
    console.log(res.data);
    
    const {message,success} = res.data
    if (success){
        alert(message)
        navigation.navigate('login')
    }
    else{
      alert(message)
    }
    console.log(params);
        setEmail("")
        setFName("")
        setLName("")
        setPassword("")
        setCPassword("")
    }
    
 function UserLogin(){
  console.log("open login page");
  console.log("firstname=", fname);
  console.log("lastname=", lname);
  console.log("email=", email);
  console.log("password=",pass);
  console.log("confirmpassword=",cpass);
  setCPassword("")
   setPassword("")
   setEmail("")
   setFName("")
   setLName("")
 }

  


  return (
    <>
      <HeadderComponent />
      <ScrollView style={styles.container}>
      <View style={styles.Text_View}>
        <Text style={styles.text_header}>Register</Text>
        </View>

      <View style={styles.View_line}></View>

      <View style={styles.main_view}> 
        <View style={styles.Text_view}>
        <Text style={styles.Text_name}>enter first name:</Text>
        </View >
        <View style={styles.Text_input}>
        <TextInput value={fname} onChangeText={d => setFName(d)} style={styles.input} placeholder='enter first name....'></TextInput>
        </View>
      </View>

      <View style={styles.main_view}>
        <View style={styles.Text_view}>
          <Text style={styles.Text_name}>Enter last Name:</Text>
        </View>
        <View style={styles.Text_input}>
          <TextInput value={lname} onChangeText={d => setLName(d)} style={styles.input} placeholder='enter last name....'></TextInput>
        </View>
      </View>


      <View style={styles.main_view}>
        <View style={styles.Text_view}>
          <Text style={styles.Text_name}>Enter Email:</Text>
        </View>
        <View style={styles.Text_input}>
          <TextInput value={email} onChangeText={d => setEmail(d)} style={styles.input} placeholder='enter email....'></TextInput>
        </View>
      </View>

      <View style={styles.main_view}>
        <View style={styles.Text_view}>
          <Text style={styles.Text_name}>Enter password:</Text>
        </View>
           <View style={styles.Text_input}>
            <TextInput value={password} onChangeText={d=>setPassword(d)} style={styles.input} placeholder='*********'></TextInput>
           </View>
        </View>

        <View style={styles.main_view}>
          <View  style={styles.Text_view}>
            <Text style={styles.Text_name}>confirm password:</Text>  
          </View>  
             <View style={styles.Text_input}>
          <TextInput value={cpassword} onChangeText={d=>setCPassword(d)} style={styles.input} placeholder='*********'></TextInput>
        </View>
      </View>


      <View style={styles.btn_view}>
        <View style={styles.btn}>
          <Text style={styles.btn_text} onPress={UserRegister}>Register</Text>
        </View>
      </View>

      <View style={styles.View_line}></View>

      <View style={styles.btn_view}>
        <View style={styles.btn}>
          <Button style={styles.btn_text} onPress={UserLogin} title='Login'/>
        </View>
      </View>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
    width:W,
    height:H
  },
  Text_input: {
    width: W,
    height: H * .088,
    backgroundColor: 'white',
    alignItems: 'center',


  },
  Text_view: {
    width: W,
    backgroundColor: 'white',
    padding: 5,

  },
  Text_name: {
    fontSize: 18,

  },
  text_header: {
    fontSize: 20
  },
  Text_View: {
    alignItems: 'center'
  },
  input: {
    width: W * .7,
    borderRadius: 20,
    backgroundColor: '#23C9D8',
  },
  main_view: {
    width: W,

  },
  View_line: {
    width: W,
    height: H * .003,
    backgroundColor: '#339AF0',
    margin:8
  },
  btn_view: {
    width: W,
    alignItems: 'center',
    

  },
  btn: {
    width: W ,
    backgroundColor: '#FCC419',
    borderRadius: 30,
    alignItems: 'center',
    padding: 10



  },
  btn_text: {
    fontSize: 20,
    color: 'black'
  }
})