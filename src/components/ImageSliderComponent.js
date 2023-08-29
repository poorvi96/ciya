import React from 'react'
import {Image,View,Dimensions,StyleSheet} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
const w =Dimensions.get('window').width;
const h =Dimensions.get('window').height;
export default function ImageSliderComponent(){
    const image = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",]
return(
    <View>
                {/* <Image source={require('../images/food/food1.jpg')} style={styles.banner}/> */}
                <SliderBox images={image} />
            </View>
)
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:"yellow"
    },
    
    banner:{
        width:w,
        height:h*.3
    },
    

})