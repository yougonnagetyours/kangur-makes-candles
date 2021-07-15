import React from 'react'
import insta from '../pics/instagram.png'
import fb from '../pics/facebook.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


export default function Footer() {
  return (
      <div>
        <div className="my-3 w-full h-6 flex justify-center">
          <img 
              className="block mr-20" 
              src={insta} 
              alt="candles" 
            />
          <img 
              className="block" 
              src={fb} 
              alt="candles" 
            />  
        </div>  
        <div className="my-3 text-center">
          <p className="text-sm font-light tracking-widest">@2021, soyaCandles</p>
        </div>
      </div>    
  );
}