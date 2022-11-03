import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='p-2 m-2'>CryptoBook</h1>
        </div>
        <div>
            <ul className='flex'>
            <li className='p-2 m-2'>Current trands</li>
                <li className='p-2 m-2'>Crypto-News</li>
                <li className='p-2 m-2'>About Us</li>
               
            </ul>
        </div>
    </div>
  )
}
