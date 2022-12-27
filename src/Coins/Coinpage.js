import axios from 'axios'
import React from 'react'
import { useState } from 'react'

import { useEffect } from 'react'
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from "chart.js"
import { Uselogics } from '../Contex/Context'


export default function Coinpage() {
  const [days,setdays]=useState()
    const {coinname}=Uselogics()
   console.log(coinname)
    const [coin,setcoin]=useState()
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinname.id}/market_chart?vs_currency=inr&days=7&interval=24`).then((value)=>{setcoin(value.data.prices)}).catch((error)=>{return console.log(error)})
    },[coinname])
    console.log(coin)
    
    
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Legend
    )
  
    const data = {
      labels:coin?.map((curr)=>{return curr[0]}),
      datasets: [
        {
          label: `${coinname.name}`,
          data:coin?.map((curr)=>{return curr[1]}),
          borderColor: "black",
          backgroundColor: "white"
        }
      ]
    }
  return (
    <div className='w-10/12 mx-auto'>
      <div className='flex items-center'>
      <img src={coinname.image} alt="" width={40}/>
      <h1 className='font-semibold text-3xl '>{coinname.name}</h1>
      
      </div>
      <Line
      data={data}
      options={{
        responsive: true
      }}
    />
    </div>
  )
}
