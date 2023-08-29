import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import HeadderComponent from '../components/HeaderComponent'
import ImageSliderComponent from '../components/ImageSliderComponent'
import ProductComponent from '../components/ProductComponent'
import {productitem} from '../Data/data'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler'
import { ContextAuth } from '../context/Context'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function HomeScreen({ navigation }) {
    const [product,setProduct] = useState('')
    const data= useContext(ContextAuth)
    const [addcart, setAddCart] = useState([]);

    useEffect(() => {
         const {productitem}=data
        async function ProductShow() {
           
            // const res = await axios("http://ankursingh.xyz/api/productshow.php")
            //const {body} = res.data
            // console.log(res.data.body);
            setProduct(productitem)
        }
        ProductShow()
    }, [])


    function Header() {
        const detail = {
            cartbtn: cartshow,
            nav: navigation.navigate,
            title: "Home screen"
        }

        return <HeadderComponent  {...detail} />
    }



    function Slider() {
        return <ImageSliderComponent />
    }

    function ProductShow() {
        return < ProductComponent />
    }
    function productShowData(product) {
        return <>
            {product.map(d => (<>
                <View style={styles.product}>
                    <TouchableOpacity onPress={() => navigation.navigate('details', { ...d, addcart })}>
                        <View style={styles.product1}>
                            <View style={styles.image}>
                                <Image source={{ uri: d.image }} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <View style={styles.producttext} >
                                <Text>product:  {d.product_name}</Text>
                                <Text>Rs.{d.product_rate}/-</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </>
            ))}
        </>
    }

    function cartshow() {
        navigation.navigate("addtocart")
    }

    return (
        <>
            <View style={styles.container}>
                {Header()}

                {Slider()}

                <View style={styles.product_List}>
                    <Text style={styles.home_product_text}>
                        Product
                    </Text>
                    <Text style={styles.home_text_seeall}>
                        See All
                    </Text>
                </View>
                {/*
                <View style={styles.product_List_show}>
                    {ProductShow()}
                </View>
    */} 
                
                    <ScrollView>
                   < View>
                        {
                            product !== '' ?
                                productShowData(product)
                                : <Text>Not Product</Text>
                        }
                    
                </View>
                </ScrollView>

            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow"
    },
    home_product_text: {
        width: w * .5,

        fontSize: 20,
    },
    home_text_seeall: {
        width: w * .4,
        fontSize: 16,
        textAlign: 'right',

    },
    product_List: {
        width: w,

        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row'

    },
    product: {
        width: w,
        height: 200,
        backgroundColor: '#c2efdf',
        justifyContent: 'center',
        alignItems: 'center',




    },
    image: {
        width: 150,
        height: "100%",
        backgroundColor: 'white'
    },
    product1: {
        width: w * .8,
        height: 180,
        backgroundColor: '#ffc6d3',
        flexDirection: 'row',
        borderRadius: 20,
        overflow: 'hidden'


    },
    ScrollView: {
        width: w,
        height: h * .5
    },
    producttext: {
        flex: 1,
        height: "100%",
        padding: 10
    }

})