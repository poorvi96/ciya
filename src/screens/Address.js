import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Address({ route, navigation }) {
  console.log("address=", route.params.state);
  const [add, setAdd] = useState(null)
  const[pay ,setPay]=useState(100);
  function addressupdate(data) {
    setAdd(data)
    console.log(data);
  }
  function addaddress1() {
    alert("address")
    const params = {
      addaddress: addressupdate
    }
    navigation.navigate('addaddress', params)
  }
  function paymentsend(){
    const params={
     "payment":pay,
     "address":add


    }
    console.log(params);
    navigation.navigate("payment",params)
  }
  return <>
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.address} >
          <Text style={styles.textaddress}>{add}</Text>
        </View>

        <View style={styles.addressbtn}>
          <TouchableOpacity style={styles.btn} onPress={addaddress1}>
            <Text>Add Address</Text>
          </TouchableOpacity>
        </View>


      </View  >
      <View style={styles.bottom}>
        <View style={styles.paymentget}>
          <Text style={{ fontSize: 20 }}>Total pay:</Text>
        </View>
        <View style={styles.paymentview}>
          <TouchableOpacity style={styles.btn} onPress={paymentsend}>
            <Text style={{ fontSize: 20 }}>Placeorder</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  </>


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',



  },
  top: {
    alignItems: 'center'
  },
  address: {
    width: w * .9,
    height: h * .2,
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 10
  },
  textaddress: {
    padding: 10
  },
  addressbtn: {
    marginVertical: 20,
    backgroundColor: 'yellow',
    padding: 20,
    height: h * .075,
    borderRadius: 20,
    alignItems: 'center',


  },
  btn: {
    alignItems: 'center'
  },
  paymentget: {
    flex: 1,
    alignItems: 'center',
    bottom: 0,
    padding: 10,
    marginLeft: 15,
  },
  paymentview: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    marginLeft: 15,
    marginRight: 10
  },
  bottom: {
    flexDirection: 'row',
    width: w,
    height: h * .1,
    marginTop: 370,

  }
})