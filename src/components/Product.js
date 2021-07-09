import React from 'react'
import candle1 from '../pics/candle1.jpg'

const candles = [
  { src: candle1, title:"Let's stay home", price:"49,90 zł", description:"49,90 zł" },
]

export default function Product() {
  return (
      <div>  
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
            <div className="border border-black w-10/12 p-12 mb-6">
              <img 
                className="block w-4/6 mx-auto"
                src={candles.src} 
                alt="candles" 
              />
              <div className="mt-6 mb-2">
                <p className="text-center font-medium tracking-wider">{candles.title}</p>
              </div>
              <div className="mt-2 mb-4">
                <p className="text-center tracking-wider">{candles.price}</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
                <p className="text-center tracking-wider">Do koszyka</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-auto">
                <p className="text-center tracking-wider">Kup teraz</p>
              </div>   
            </div>
        </div>
      </div>    
  );
}