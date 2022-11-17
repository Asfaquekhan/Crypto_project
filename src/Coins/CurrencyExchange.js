import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function CurrencyExchange() {
const [currency,setcurrency]=useState()
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/exchange_rates")
        .then((value)=>{setcurrency(value.data)})
        .catch((error)=>{return console.log(error)})
    },[])
   console.log(currency)
  return (
    <div>
      
    </div>
  )
}
