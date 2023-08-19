import React from 'react'
import {Image,View,Dimensions,StyleSheet} from 'react-native'
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
export default function ImageSliderComponent(){
return(
    <View>
                <Image source={require('../images/food/food1.jpg')} style={styles.banner}/>
            </View>
)
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },
    
    banner:{
        width:w,
        height:h*.3
    },
    

})