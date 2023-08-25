import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function AddAddress(props) {
     
    const [address, setAddress] = useState("")
   
    function addaddressdata() {
        console.log(props.route.params);
        const{addaddress}=props.route.params
       const{data,details}=address
       console.log(data);
       addaddress(data.description)
       props.navigation.goBack()
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.viewtext}>
                <Text style={styles.text}>Enter address:</Text>
            </View>
             

            <View style={styles.viewinput}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                        setAddress({ data, details })
                    }}
                    query={{
                        key: 'AIzaSyBb3j8Aiv60CadZ_wJS_5wg2KBO6081a_k',
                        language: 'en',
                    }} /></View>

            <View style={styles.btn}>
                <TouchableOpacity style={styles.add} onPress={addaddressdata}>

                    <Text style={styles.btn_input} >Add Address</Text>

                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        marginBottom: 10
    },
    viewtext: {
        width: w,
        height: h * .1,
        backgroundColor: 'pink',
        marginBottom: 50,
        marginTop: 30

    },
    text: {
        fontSize: 20,
        padding: 10
    },

    btn: {
        borderRadius: 20,
        alignItems: 'center'
    },
    btn_input: {
        fontSize: 20,
        backgroundColor: 'green',
        borderRadius: 20,
        padding: 20,

    },
    viewinput: {
        height: h * .2
    },
})