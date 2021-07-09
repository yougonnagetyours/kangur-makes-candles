import React from 'react'
import candle1 from '../pics/candle1.jpg'
import candle2 from '../pics/candle2.jpg'
import candle3 from '../pics/candle3.jpg'
import candle4 from '../pics/candle4.jpg'

const candles = [
  { src: candle1, title:"Let's stay home", price:"49,90 zł" },
  { src: candle2, title:"Bitch.. You Got This!", price:"34,90 zł"  },
  { src: candle3, title:"salt sea", price:"52,90 zł"  },
  { src: candle4, title:"Urban | 01", price:"50,00 zł"  },
]

export default function Shop() {
  return (
      <div>  
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {candles.map((candle) => (
            <div className="border border-black w-10/12 p-12 mb-6">
              <img 
                className="block" 
                src={candle.src} 
                alt="candles" 
              />
              <div className="mt-6 mb-2">
                <p className="text-center font-medium tracking-wider">{candle.title}</p>
              </div>
              <div className="mt-2 mb-2">
                <p className="text-center tracking-wider">{candle.price}</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-1/2">
                <p className="text-center tracking-wider">Do koszyka</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-1/2">
                <p className="text-center tracking-wider">Kup teraz</p>
              </div>   
            </div>
          ))}  
        </div>
      </div>    
  );
}