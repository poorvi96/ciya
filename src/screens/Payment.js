import React, { useEffect, useMemo, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity,TextInput } from 'react-native'

import OtpInputs from 'react-native-otp-inputs';

import RadioGroup from 'react-native-radio-buttons-group';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Payment({route,navigation}) {
    const [selectedId, setSelectedId] = useState();
    const { address, payment } = route.params
    const [isConfirm, setIsConfirm] = useState(false);
    const [isOTP, setIsOTP] = useState(false);
    const [otp, setOTP] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Pay offline',
            value: 'offline'
        },

    ]), []);
    const radioButtons1 = useMemo(() => ([

        {
            id: '2',
            label: 'pay online',
            value: 'online'
        }
    ]), []);
    useEffect(() => {

    }, [selectedId])
  function confirmbtn(){
    setIsConfirm(!isConfirm)
  }
  function confirmphone(){
    setIsOTP(!isOTP)
  }
    function confirmData(){
       return<View style={styles.confirmview}>
                        <View style={styles.phoneView}>
                    <TextInput placeholder='enter number'/>
                        <TouchableOpacity onPress={confirmphone} style={styles.btnorder}>
                        <Text style={styles.con}>Confirm</Text>
            </TouchableOpacity>

                </View>
       </View>
    }
    function payoffline() {
        return <>
            <View>
                <View style={styles.addressview}>
                    <Text>{address}</Text>
                </View>
                <View style={styles.productview}>

                </View>
                <View style={styles.payview}>
                    <Text style={{fontSize: w * .05}}>{payment}</Text>
                    <TouchableOpacity onPress={confirmbtn}>
            <Text>Confirm</Text>
        </TouchableOpacity>
                </View>
               
            </View>
           
        </>
    }
    function otpConfirm() {
        return<View style={styles.confirmview}>
                        <View style={styles.phoneView}>
                        <OtpInputs  
          handleChange={(code) => setOTP(code)}
          numberOfInputs={4}
          inputStyles={{backgroundColor:"white"}}
          
        />
        <TouchableOpacity onPress={Otp} style={styles.btnotp}>
                        <Text style={styles.ot}>Confirm</Text>
            </TouchableOpacity>

                </View>
       </View>
    }
    function payonline() {
        return <>
            <Text style={{ fontSize: w * .05 }}>Pay online</Text>
        </>
    }
    function Otp(){
       
        if(otp==="1111"){
            alert("Congrats!your order has confirmed.")
            navigation.navigate("orderconfirm")
        }
        else{
            alert("wrong password!Try again")
        }
    } 
    return (
        <>
            <View style={styles.getmode}>
                <Text style={styles.text}>Payment Mode:</Text></View>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
            />

            <View style={styles.payoffview}>
                {selectedId == '1' ? payoffline() : null}
            </View>

            <RadioGroup
                radioButtons={radioButtons1}
                onPress={setSelectedId}
                selectedId={selectedId}
            />

            <View style={styles.payoffview}>

                {selectedId == '2' ? payonline() : null}
            </View>

            <View style={styles.order}>
                <TouchableOpacity style={styles.orderbtn} >
                    <Text style={{ fontSize: w * .07 }}>Order now</Text>
                </TouchableOpacity>
            </View>

           
            {isConfirm&&confirmData()}
            {isOTP&&otpConfirm()}
        </>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    getmode: {
        alignItems: 'center',
        backgroundColor: 'yellow',
        margin: 20,
        padding: 10
    },
    order: {
        width: w,
        backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 0,
        padding: 20,
        alignItems: 'center'
    },
    payoffview: {
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    addressview: {
        width: w,
        height: h * .1,

        margin: h * .01
    },
    productview: {
        width: w,
        height: h * .2,

        margin: h * .01
    },
    payview: {
        width: w,
        height: h * .1,
       
        margin: h * .01
    },
    confirmview:{
        width:w,
        height:h,
        backgroundColor:'red',
        position: 'absolute',
        bottom: 0,
        left: 0,
        top:0,
        right:0

    },
    phoneView:{
     
        width:w,
        height:h*.3 ,
        marginTop:w*.03,
        
        
      
    },
    con:{
        backgroundColor:"yellow",
        fontSize:20
    },
    ot:{
        fontSize:20
    },
    btnotp:{
        backgroundColor:'yellow',
        alignItems:'center'
    }

  

})