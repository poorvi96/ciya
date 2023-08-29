import React, { useEffect, useState,useContext } from 'react'
import { Text, StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native'
import del from "../images/icon/del.png"
import HeadderComponent from '../components/HeaderComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ContextAuth } from '../context/Context'
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
export default function Addtocart({ route, navigation }) {
    const data  = useContext(ContextAuth)
    const {Addtocart} = data
    console.log("add to cart===", route.params);
//    const [product, setProduct] = useState(route.params);
const [product, setProduct] = useState(Addtocart);
  
    const [totalqty, setTotalqty] = useState(0);
    const [totalpay, setTotalpay] = useState(0);

    useEffect(() => {
        var qty = 0;
        var pay = 0;
        function showdata() {
            product.map(d => {
                qty += d.qty
                pay += d.qty * d.product_rate
            })

        }
        showdata()
        setTotalqty(qty)
        setTotalpay(pay)
    }, [])
    function placeorderpay() {
        const params = {
            ...product,
            "orderid": 1,
            "qty": totalqty,
            "pay": totalpay
        }

        console.log(params);
        navigation.navigate('address', { state: params })
    }
    function placeOrder() {
        return <>
            <View style={styles.producttext}>
                <View style={styles.productviewqty}>
                    <Text >Qty: </Text>
                    <Text style={styles.productviewqtytext}>{totalqty}</Text>
                </View>

                <View style={styles.productviewrate}>
                    <Text >Total pay:</Text>
                    <Text style={styles.productviewqtytext}>{totalpay}</Text>
                </View>
            </View>
            <View style={styles.productplace}>
                <TouchableOpacity onPress={placeorderpay} style={styles.placeorderbtn}>
                    <Text>Placeordernow </Text>
                </TouchableOpacity>

            </View>
        </>
    }
    function showCart(product) {
        return (
            <>
                <View style={styles.cartview}>
                    <View style={styles.cartview_image}>
                        <Image source={{ uri: product.image }} style={{ width: '100%', height: '100%' }} />
                    </View>
                    <View style={styles.cartview_text}>
                        <View style={styles.cartview_text1}>
                            <Text style={styles.product_name}>Product:{product.product_name}</Text>
                            <Text style={styles.product_rate}>Rs.{product.product_rate}/-</Text>
                        </View>
                        <View style={styles.cartview_delete}>
                            <Text style={styles.product_qty}>Qty:{product.qty}</Text>

                            <Image source={del} style={{ width: '20%', height: '100%', marginRight: 20 }} />
                        </View>
                    </View>

                </View>
            </>)

    }


    return (
        <>
            <View style={styles.container}>
                <HeadderComponent />

                <View style={styles.cartproduct}>
                    <ScrollView>
                        {

                            product.map(pro => (
                                showCart(pro)
                            ))

                        }
                    </ScrollView>
                </View>
                
                <View style={styles.placeorder}>
                    {placeOrder()}
                </View>

            </View>





        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center'
    },
    cartview: {
        width: w * .9,
        height: h * .15,
        backgroundColor: "white",
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        marginTop: 10
    },
    cartview_image: {
        flex: 1,
        backgroundColor: 'pink'
    },
    cartview_text: {
        flex: 2,


    },
    cartview_text1: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 8,
        flexDirection: 'row',
        padding: 5
    },
    cartview_delete: {
        flex: 1,
        backgroundColor: '#04F0E1',
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 10
    },
    product_name: {
        flex: 2
    },
    product_qty: {
        flex: 1
    },
    product_rate: {
        flex: 1,

    },
    placeorder: {
        width: w,
        height: h * .26,
        backgroundColor: '#c2efdf',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        borderRadius: 70,
        overflow: 'hidden',




    },
    cartproduct: {
        width: w,
        height: h * .8,
        backgroundColor: 'pink',
        borderBottomEndRadius: 50,
        borderBottomLeftRadius: 50
    },
    producttext: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',


    },
    productplace: {
        flex: 1,
        backgroundColor: '#c2efdf',
        justifyContent: 'center',
        alignItems: 'center'

    },
    productviewqty: {
        flex: 1,
        marginTop: 20
    },
    productviewrate: {
        flex: 1,
        marginTop: 20
    },
    placeorderbtn: {
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 20
    },
    productviewqtytext: {
        width: 100,
        backgroundColor: 'white',
        padding: 10,
        marginTop: 5

    }
})