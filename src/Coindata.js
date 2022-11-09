import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {FcInfo} from 'react-icons/fc'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from "@mui/material";


export default function Coindata() {
  const [userdata, setuserdata] = useState();
  const [page, setPage] = useState(0);
  const [RowsPerPage, setRowsPerPage] = useState(10);
 
  /* to Exchange currency */

  /* Currency Data */
 

  useEffect(() => {
    const url =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    axios
      .get(url)
      .then((res) => {
        setuserdata(res.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
 /* Adding to watch */ 
 const [add,setadd]=useState()
 const deleteoption=(id)=>{
  let news = userdata.map((value)=>{return value.id}).indexOf(id)
  let product = userdata.splice(news,1)

  setadd(product[0].id)


  
 }
 const [watch,setwatch]=useState([])
 const addition=(name)=>{
 
    setwatch((value)=>{
      return [...value, name];
    })
   console.log(watch)
 }
  return (
    <div className="max-w-[800px] mx-auto shadow-xl">
      <div>
        <ul>
          {watch.map((value)=>{
            return (
              <li>{value}</li>
            )
          })}
        </ul>
      </div>
      
     <div className={add && "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"} role="alert">
  <div className="flex">
    <div className="mr-3">{add && <FcInfo size={30}/>}</div>
    <div>
      <p className="font-bold">{add}</p>
      <p className="text-sm">{add && "Removed from your watch list"}</p>
    </div>
  </div>
</div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              
              <TableCell className="text-lg">Coin</TableCell>
              <TableCell className="text-lg">Price</TableCell>
              <TableCell className="text-lg">Up/Down</TableCell>
              <TableCell className="text-lg">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userdata &&
              userdata
                .slice(page * RowsPerPage, page * RowsPerPage + RowsPerPage)
                .map((row) => {
                  return (
                    <TableRow key={row.id}>
                      
                      <TableCell>
                        <div className="flex items-center">
                          <span className="mr-2">
                            {" "}
                            <img src={row.image} alt="" width={30} />
                          </span>
                          <span> {row.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{row.current_price}</TableCell>
                      <TableCell
                        className={
                          row.price_change_percentage_24h < 0
                            ? " text-red-600"
                            : " text-green-600"
                        }
                      >
                        <div
                          className={
                            row.price_change_percentage_24h < 0
                              ? "flex items-center text-red-600"
                              : "flex items-center text-green-600"
                          }
                        >
                          <span>{row.price_change_percentage_24h}%</span>
                          <span>
                            {row.price_change_percentage_24h < 0 ? (
                              <AiOutlineArrowDown />
                            ) : (
                              <AiOutlineArrowUp />
                            )}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                       <button onClick={(()=>{deleteoption(row.id)})} className='ring-1 p-1 rounded-lg text-white bg-blue-700'>Delete</button>
                       <button className="ring-1 p-1 rounded-lg ml-3 text-white bg-blue-700" onClick={(()=>{addition(row.name )})}>Add</button>
                        </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={RowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
