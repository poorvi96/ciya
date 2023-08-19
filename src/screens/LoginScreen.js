import React, { useState } from 'react'
import {Text,View,Dimensions,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;
import axios from 'axios'

export default function LoginScreen(){

    const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   async function Login(){
      const params={   
         "email":email,
         "pass":password,
        
     }
     const res = await axios("http://ankursingh.xyz/api/Employeelogin.php",params)
    console.log(res.data);
    
    const {message,success} = res.data
    if (success){
        alert(message)
    
    }
    console.log(params);
    }
     return(
        <View style={styles.conatiner}>
             <View style={styles.view_header}>
                 <Text style={styles.header_text} >LoginScreen</Text>
                  </View>

              <View style={styles.email_view}>
                <Text style={styles.email_text}>enter email:</Text>
                <View  style={styles.input_view}>
               <TextInput value={email} onChangeText={d => setEmail(d)} style={styles.email_input} placeholder='enter email.....'/>
               </View>
                </View>    

                <View style={styles.email_view}>
                <Text style={styles.email_text}>enter password:</Text>
                <View  style={styles.input_view}>
               <TextInput value={password} onChangeText={d => setPassword(d)} style={styles.email_input} placeholder='**********'/>
               </View>
                </View>    

                <View style={styles.btn_view}>
             <TouchableOpacity style={styles.btn} onPress={Login}>
                <Text  style={styles.btn_text} >Login</Text>
             </TouchableOpacity>
                </View>
        </View>
     )
}
const styles=StyleSheet.create({
    container:{
        width:W,
        height:H,
        backgroundColor:'white'
    },
     view_header:{
        width:W,
        backgroundColor:'#ffc6d3',
        alignItems:'center',    
     },
     header_text:{
        fontSize:25,
        padding:20,
     },
     email_view:{
        width:W,
        height:H*.2,
        backgroundColor:'white'
     },
     email_text:{
        fontSize:20,
        padding:10,
       
     },
     email_input:{
        padding:10,
        borderRadius:20,
        backgroundColor:'lightgray',
        width:W*.7
     },
     input_view:{
        alignItems:'center',
        width:W,
        height:H*.2,
        backgroundColor:'white'
     },
     btn_view:{
        width:W,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:20
     },
     btn_text:{
        fontSize:25,
        
     },
     btn:{
        width:W*.8,
        backgroundColor:'#c2efdf',
        alignItems:'center',
        padding:15,
        borderRadius:20
     }
})