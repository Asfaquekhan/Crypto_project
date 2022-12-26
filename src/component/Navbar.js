import React from "react";
import { Uselogics } from "../Contex/Context";

export default function Navbar() {
  const {watchlist,setwatchlist}=Uselogics()
  return (
    <div className="flex justify-between sticky top-0 bg-slate-300 font-bold">
      <div>
        <h1 className="p-2 m-2">CryptoBook</h1>
      </div>
      <div>
        <ul className="flex">
          <li className={watchlist?"hidden":"p-2 m-2"} onClick={()=>{setwatchlist(true)}}>watch list</li>
          <li className="hidden md:p-2 md:m-2">Crypto-News</li>
        </ul>
      </div>
    </div>
  );
}
