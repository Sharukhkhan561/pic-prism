import React, { useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import BuyerDashboard from '../pages/BuyerDashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SellerDashboard from '../pages/SellerDashboard'
import Signup from '../pages/Signup'
import gsap from 'gsap'

const GsapTransition = () => {
    const nodeRef= useRef(null);
    const location = useLocation();

    useEffect(() => {
      if(nodeRef.current){
        gsap.fromTo(nodeRef.current, {opacity:0}, {opacity:1, duration:1})
      }  
    }, [location])
    
  return (
    <div ref={nodeRef}>
         <Routes location={location} >
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/seller/profile' element={<SellerDashboard/>}/>
          <Route path='/buyer/profile' element={<BuyerDashboard/>}/>
        </Routes>
    </div>
  )
}

export default GsapTransition