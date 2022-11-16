
import './App.css';
import Coindata from './Coindata';
import CurrencyExchange from './component/CurrencyExchange';


import Home from './component/Home';
import Navbar from './component/Navbar';
import News from './component/News';




function App() {
  return (
    <div >
     <Navbar/>
     <Home/>
    
      <Coindata/>
      <CurrencyExchange/>
      <News/>
    </div>
  );
}

export default App;
