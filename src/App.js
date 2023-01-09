
import './Styles/coins.css'
import './Styles/navbar.css'
import './Styles/coindetail.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Coins from "./Component/Coins";
import Exchanges from './Component/Exchanges';
import Coindetails from './Component/Coindetails';
import Footer from './Component/Footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route exact path = '/coins' element = {<Coins/>}/>
        <Route exact path = '/exchanges' element = {<Exchanges/>}/>
        <Route exact path = '/coin/:id' element = {<Coindetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
