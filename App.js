
import React from 'react'
import Router from './src/routes/Router'
import {Addtocart,productitem,orderdata} from "./src/Data/data"
import 'react-native-gesture-handler'
import { ContextAuth } from './src/context/Context'
export default function App(){
  const data={
    Addtocart,productitem,orderdata
  }
  return(
   <ContextAuth.Provider value={data}>
<Router/>
</ContextAuth.Provider>
   
  )
}