import React, { useEffect, useState } from "react";
import axios from "axios";
export default function News() {
  const [newsapi, setnews] = useState([]);
  useEffect(() => {
   
  }, []);
  console.log(newsapi);
  return (
    <div>
      <h1 className="text-3xl text-center">Get the latest News</h1>
      <div className="space-y-5">
      
      </div>
    </div>
  );
}
