import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
const store =createContext();


export  function Context({children}) {
    const [watchlist,setwatchlist]=useState(false)
    const [watchitem,setwatchitem]=useState([])
    const [coinname,setcoinname]=useState([])
    function coinadd(name){
        setwatchitem((value) => {
            if (value.includes(name)) {
              alert(`${name.name} is already in your watchlist`)
              return [...value] 
            } else {
              return [...value, name];
            }
          });
    }
    function coindelete(items){
     setwatchitem(watchitem.filter((value)=>{
        return value!==items
    }))
    }
   
  return (
   <store.Provider value={{watchlist,setwatchlist,coinname,setcoinname,coinadd,watchitem,coindelete}}>
     {children}
   </store.Provider>
  )
}
export function Uselogics(){
    return useContext(store)
}