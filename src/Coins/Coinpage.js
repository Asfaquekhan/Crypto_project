import axios from 'axios'
import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { Uselogics } from '../Contex/Context'


export default function Coinpage() {
    const {coinname}=Uselogics()
    const [coin,setcoin]=useState()
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinname}/market_chart?vs_currency=usd&days=7&interval=24`).then((value)=>{setcoin(value.data)}).catch((error)=>{return console.log(error)})
    },[coinname])
    console.log(coin)
  return (
    <div>
      
    </div>
  )
}
