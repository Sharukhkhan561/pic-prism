import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/seller/profile' element={<SellerDashboard/>}/>
          <Route path='/buyer/profile' element={<BuyerDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
