import React, { useEffect, useState } from 'react'
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import add from "../images/icon/add.png"
import sub from "../images/icon/sub.png"
import cart from '../images/icon/cart.png'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Details({ route,navigation }) {
    const [product, setProduct] = useState(route.params);
    const [qty, setQty] = useState(1);
    const [amount, setAmount] = useState(product.product_rate)
    const [totalpay, setTotalpay] = useState('')
    useEffect(() => {
        function Data(totalpay, qty) {
            setTotalpay(totalpay * qty)
        }
        Data(amount, qty)
    }, [amount, qty])
    function subqty() {

        var q = qty
        if (q > 1)
            setQty(--q)

    }
    function addqty() {

        var q = qty
        if (q < 10)
            setQty(++q)

    }
    function addToCart(){
        alert("add tocart")
        const params = {
            ...product,
            "cartid":product.product_id,
            "qty":qty,
            "totalpay":totalpay,
            "userId":1
           
        }
        var cart=product.addcart;
        cart.push(params);
       
        
        navigation.navigate("addtocart",cart)
   }
   console.log(product);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <View style={styles.details}>
                    <View style={styles.viewimage}>
                        <Image source={{ uri: product.image }} style={styles.image} />
                    </View>
                    <View style={styles.textdata}>
                        <View style={styles.producttext}>
                            <Text style={styles.productname}>{[product.product_name]}</Text>
                            <Text style={styles.productrate}>Rs.{[product.product_rate]}/-</Text>
                        </View>
                        <View style={styles.qtyview}>
                            <Text style={styles.qtytext}>Qty:</Text>
                            <View style={styles.qtychangeview}>
                                <TouchableOpacity onPress={subqty}>
                                    <Image source={sub} style={styles.imagesub} />
                                </TouchableOpacity >
                                <Text style={styles.qtytext1}>{qty}</Text>
                                <TouchableOpacity onPress={addqty}>
                                    <Image source={add} style={styles.imageadd} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={styles.addtocart}>
                        <Text style={styles.totalpay}> Rs.{totalpay}/-</Text>
                        
                           
                            
                                <TouchableOpacity style={styles.cartbtn} onPress={addToCart}>
                                <View style={styles.cartview}>
                                <Image source={cart} style={styles.cartimage} />
                                </View>
                                </TouchableOpacity>
                            
                           

                    </View>
                </View>
                <View style={styles.footer}>

                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 1,
        backgroundColor: '#ffc6d3'
    },
    details: {
        flex: 9,
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#ffc6d3'
    },
    viewimage: {
        width: w * .8,
        backgroundColor: '#c2efdf',
        height: h * .5,
        borderRadius: 20,
        overflow: 'hidden'

    },
    cartbtn:{
        flex:1,
    },
    image: {
        width: '100%',
        height: '100%'

    },
    textdata: {
        width: w * .8,
        backgroundColor: '#c2efdf',
        height: h * .18,
        borderRadius: 20,
        marginTop: 10,
        overflow: 'hidden'

    },
    addtocart: {
        width: w * .8,
        height: h * .1,
        backgroundColor: '#05C5EF',
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cartimage: {
        width: 30,
        height: 30,
        marginRight: 30
    },
    producttext: {
        width: '100%',
        height: 70,

        flexDirection: 'row',
        paddingHorizontal: 10
    },
    productname: {
        flex: 1,
        padding: 10,
        fontSize: 20
    },
    productrate: {
        flex: 1,
        padding: 10,
        textAlign: 'right',
        fontSize: 20
    },
    qtyview: {
        flex: 1,

        flexDirection: 'row'
    },
    qtychangeview: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 35
    },
    qtytext: {
        flex: 3,
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 35

    },
    qtytext1: {
        paddingHorizontal: 10,
        fontSize: 20,
        textAlign: "center"
    },
    imageadd: {
        width: 30,
        height: 30
    },
    imagesub: {
        width: 30,
        height: 30
    },

    totalpay: {
        padding: 20,
        fontSize: 18,
        color: '#fff',
        flex: 2
    },


    
        cartview:{
           marginRight:20,
            marginTop:20,
            backgroundColor:'#fff',
           alignItems:'center',
            borderRadius:20,
           
           
        },
        
    cartimage: {
        width: 30,
        height: 30,
        marginRight: 50,
        padding:20,
        marginLeft:35
    },
    cartbtn:{
        flex:1,
    },


})
