import { Route, Routes } from "react-router-dom";
import "./App.css";

import Coinpage from "./Coins/Coinpage";
import Footer from "./component/Footer";

import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Watchlist from "./component/Watchlist";
import { Context } from "./Contex/Context";

function App() {
  return (
    <div className="">
      <Context>
        <Navbar />
        <Watchlist />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/coin" element={<Coinpage/>}/>
          </Route>
        </Routes>
        <Footer/>
      </Context>
    </div>
  );
}

export default App;
