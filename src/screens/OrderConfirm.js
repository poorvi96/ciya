import React from 'react'
import {Text,StyleSheet,View,Dimensions} from 'react-native'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function OrderConfirm(){
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