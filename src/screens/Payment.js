import React, { useEffect, useMemo, useState } from 'react'
import {Text,View,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'

import RadioGroup from 'react-native-radio-buttons-group';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Payment(){
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Pay offline',
            value: 'offline'
        },
        {
            id: '2',
            label: 'pay online',
            value: 'online'
        }
    ]), []);
    useEffect(()=>{
        
    },[selectedId])
    return (
        <>
        <View style={styles.getmode}> 
        <Text style={styles.text}>Payment Mode:</Text></View>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
        <View style={styles.order}>
            <TouchableOpacity style={styles.orderbtn} >
             <Text>Order now</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}
const styles=StyleSheet.create({
text:{
    fontSize:20,
},
getmode:{
    alignItems:'center',
    backgroundColor:'yellow',
    margin:20,
    padding:10
}
})