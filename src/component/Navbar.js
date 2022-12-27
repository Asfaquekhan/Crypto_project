import React from "react";
import { Link } from "react-router-dom";
import { Uselogics } from "../Contex/Context";

export default function Navbar() {
  const {watchlist,setwatchlist,watchitem}=Uselogics()
  return (
    <div className="flex justify-between sticky top-0 font-bold bg-neutral-600 text-white">
      <div>
        <Link to='/'>
        <h1 className="p-2 m-2">CryptoBook</h1>
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className={watchlist?"hidden":"cursor-pointer p-2 m-2"} onClick={()=>{setwatchlist(true)}}><span className="mr-3">{watchitem.length}</span>watch list</li>
          
        </ul>
      </div>
    </div>
  );
}
