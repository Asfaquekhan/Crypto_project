import React from 'react'
import Coindata from '../Coins/Coindata'




export default function Home() { 
 
  
  return (
    <div className=''>
        <div className='w-1/2 p-2 m-2'>
           <h1 className='my-10 text-lg'>Welcome to CryptoBook</h1>
           <p className='text-5xl my-10'>Best Place to get latest Cryptocurrency News</p>
        </div>
       <Coindata/>
    </div>
  )
}
