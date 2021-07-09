import React from 'react'
import candle1 from '../pics/candle1.jpg'

const candles = [
  { src: candle1, title:"Let's stay home", price:"49,90 zł", description:"Lorem" },
]

const productDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

const product = { src: candle1, title:"Let's stay home", price:"49,90 zł", description: productDescription } 

export default function Product() {
  return (
      <div>  
        <div className="box-border mx-auto my-6 p-6 ">
            <div className="border border-black w-10/12 mx-auto mb-6">
              <img 
                className="block w-4/6 mx-auto"
                src={product.src} 
                alt="candles" 
              />
            </div>  
            <div className="">
              <p className="text-center font-medium tracking-wider">{product.title}</p>
            </div>
            <div className="mt-6 mb-2">
              <p className="text-center tracking-wider">{product.description}</p>
            </div>
            <div className="mt-2 mb-4">
              <p className="text-center tracking-wider">{product.price}</p>
            </div>
            <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
              <p className="text-center tracking-wider">Do koszyka</p>
            </div>
            <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
              <p className="text-center tracking-wider">Kup teraz</p>
            </div>              
        </div>
      </div>    
  );
}