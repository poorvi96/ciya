import React,{useContext} from 'react'
import {Text,StyleSheet,View,Dimensions} from 'react-native'
import { ContextAuth } from '../context/Context'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function OrderConfirm(){
    const data = useContext(ContextAuth)
    const{orderdata} =data
    console.log("order confirm");
    console.log(orderdata);
  
    return(
        <View style={styles.confirm}>
        <Text style={styles.text}>Order Confirmed!</Text>
        </View>
    )
}
const styles=StyleSheet.create({
confirm:{
alignItems:'center',
marginTop:h*.5
},
text:{
    fontSize:20,
    color:'black',
    fontWeight:'bold'
   
}
})