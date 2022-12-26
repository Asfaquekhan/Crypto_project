import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

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
import { Uselogics } from "../Contex/Context";

export default function Coindata() {
  const [userdata, setuserdata] = useState();
  const [page, setPage] = useState(0);
  const [RowsPerPage, setRowsPerPage] = useState(10);
  const { setcoinname, coinadd } = Uselogics();
  /* to Exchange currency */

  /* Currency Data */

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
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
  };
  /* Adding to watch */
 
  const [ isAlertVisible, setIsAlertVisible ] = useState(false);
  const [add,setadd]=useState()
  const handleButtonClick = (item) => {
      setIsAlertVisible(true);
       setadd(item)
        setTimeout(() => {
            setIsAlertVisible(false);
       }, 2000);
  }
  return (
    <div className="max-w-[800px] mx-auto shadow-xl">
     <div className={isAlertVisible?`fixed top-[20%] right-[40%] bg-green-300 p-2 border rounded-sm`:'hidden'}>
      
   <span className="font-semibold mr-3">{add}</span>
   added to your watchlist
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
                    <TableRow
                      key={row.id}
                      onClick={() => {
                        setcoinname(row.id);
                      }}
                    >
                      <TableCell>
                        <div className="flex items-center cursor-pointer">
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
                        <button
                          className="ring-1 p-1 rounded-lg ml-3 text-white bg-blue-700"
                          onClick={() => {
                            coinadd(row)
                            handleButtonClick (row.name)
                          }}
                        >
                          Add
                        </button>
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
