import React from 'react'
import Product from '../components/Product.js'

import candle2 from '../pics/candle2.jpg'
import candle3 from '../pics/candle3.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const candles = [
  { src: candle2, title:"Bitch.. You Got This!", price:"34,90 zł"  },
  { src: candle3, title:"salt sea", price:"52,90 zł"  },
]

export default function ShopPrewiew() {
  return (
      <Router>  
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {candles.map((candle) => (
            <div className="w-10/12 mb-20">
              <div className="border border-black">
                <img 
                  className="block w-4/6 mx-auto p-6"
                  src={candle.src} 
                  alt="candles" 
                />
              </div>
              <div className="mt-6 mb-2">
                <p className="text-center font-medium tracking-wider">{candle.title}</p>
              </div>
              <div className="mt-2 mb-4">
                <p className="text-center tracking-wider">{candle.price}</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
                <p className="text-center tracking-wider">Do koszyka</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
                <p className="text-center tracking-wider">Kup teraz</p>
              </div> 
            </div>
          ))}
          <div className="mx-auto text-lg mb-4 py-2 cursor-pointer w-auto">
            <p className="text-center tracking-wider">Więcej produktów</p>
          </div>    
        </div>
      </Router>    
  );
}