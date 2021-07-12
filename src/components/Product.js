import React from 'react'
import candle1 from '../pics/candle1.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const candles = [
  { src: candle1, title:"Let's stay home", price:"49,90 zł", description:"Lorem" },
]

const productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

const product = { src: candle1, title:"Let's stay home", price:"49,90 zł", description: productDescription } 

export default function Product() {
  return (
      <div>  
        <div className="box-border mt-4 px-10 sm:px-28 md:px-0 lg:px-60">
            <div className="border border-black md:mx-60">
              <img 
                className="block mx-auto"
                src={product.src} 
                alt="candles" 
              />
            </div>  
            <div className="mt-4 md:mx-16">
              <div className="mt-3">
                <p className="text-left text-xl uppercase tracking-widest">{product.title}</p>
              </div>
              <div className="mt-3">
                <p className="text-left text-base tracking-widest">{product.price}</p>
              </div>
              <div className="mt-5">
                <p className="text-justify text-sm font-light tracking-widest">{product.description}</p>
              </div>           
            </div>
            <div className="mt-4 sm:flex sm:justify-between md:px-60">
              <div className="mt-2 mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto sm:flex-grow sm:mr-4">
                <p className="text-center tracking-wider">Do koszyka</p>
              </div>
              <div className="mt-2 mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto sm:flex-grow sm:mr-4">
                <p className="text-center tracking-wider">Kup teraz</p>
              </div> 
            </div>             
        </div>
      </div>    
  );
}