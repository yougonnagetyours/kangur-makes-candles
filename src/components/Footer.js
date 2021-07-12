import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


export default function Footer() {
  return (
      <div>
        <div className="my-3 text-center">
          <p></p>
        </div>  
        <div className="my-3 text-center">
          <p className="text-sm font-light tracking-widest">@2021, soyaCandles</p>
        </div>
      </div>    
  );
}