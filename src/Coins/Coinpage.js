import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Coinpage() {
    const [coin,setcoin]=useState()
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=24").then((value)=>{setcoin(value.data)}).catch((error)=>{return console.log(error)})
    },[])
    console.log(coin)
  return (
    <div>
      
    </div>
  )
}
