import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import Navbar from './components/Navbar';
import GsapTransition from './components/GsapTransition';
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
       <GsapTransition/>
      </BrowserRouter>
    </>
  )
}

export default App
