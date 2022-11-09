
import './App.css';
import Coindata from './Coindata';
import CurrencyExchange from './component/CurrencyExchange';


import Home from './component/Home';
import Navbar from './component/Navbar';




function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
    
      <Coindata/>
      <CurrencyExchange/>
    </div>
  );
}

export default App;
