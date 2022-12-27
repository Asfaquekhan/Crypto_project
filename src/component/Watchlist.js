import React from "react";
import { Uselogics } from "../Contex/Context";
import { GrClose } from "react-icons/gr";
import {AiFillDelete} from 'react-icons/ai'
export default function Watchlist() {
  const { watchlist, setwatchlist, watchitem ,coindelete} = Uselogics();

  return (
    <div
      className={
        watchlist
          ? "fixed h-full md:w-1/4 md:right-0  w-1/2 top-14 bg-neutral-600 text-white border border-black ease-in-out duration-500 bg-transparent cursor-pointer"
          : "fixed  top-0 w-[10%] h-1/5 text-white bg-slate-900 ease-in-out duration-500 right-[-100%]"
      }
    >
      <div className="flex justify-between">
        <h3 className="p-2 font-semibold">Watch list</h3>
        <p
          className="p-2"
          onClick={() => {
            setwatchlist(false);
          }}
        >
          <GrClose />
        </p>
      </div>
      <ul className="space-y-4">
        {watchitem?.map((curr) => {
          return (
            <li key={curr.id}>
              <div className="flex items-center cursor-pointe justify-between border border-black" >
                
                <div className="flex items-center">
                <span className="ml-3">
                  {" "}
                  <img src={curr.image} alt="" width={20} />
                </span>

                <span className="ml-3"> {curr.name}</span>
                </div>
                <div className="mr-3">
                    <AiFillDelete onClick={()=>{coindelete(curr)}}/>
                </div>
              </div>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}
