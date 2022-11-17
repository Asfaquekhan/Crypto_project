
import './App.css';
import Coindata from './Coins/Coindata';
import Coinpage from './Coins/Coinpage';

import CurrencyExchange from './Coins/CurrencyExchange';


import Home from './component/Home';
import Navbar from './component/Navbar';





function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
    
     <Coindata/>
      <CurrencyExchange/>
     <Coinpage/>
    </div>
  );
}

export default App;
