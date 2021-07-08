import React from 'react'
import candle1 from '../pics/candle1.jpg'
import candle2 from '../pics/candle2.jpg'
import candle3 from '../pics/candle3.jpg'
import candle4 from '../pics/candle4.jpg'

const candles = [
  { src: candle1 },
  { src: candle2 },
  { src: candle3 },
  { src: candle4 },
]

export default function Shop() {
  return (
      <div>  
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {candles.map((candle) => (
            <div className="border border-black w-10/12 p-5 mb-6">
              <img 
                className="block" 
                src={candle.src} 
                alt="candles" 
              />
              <div className="mt-4 mb-2">
                <p className="text-center">50 zł</p>
              </div>
              <div className="mx-auto my-2 py-2 border-2 border-black cursor-pointer w-1/2">
                <p className="text-center">Kup teraz</p>
              </div>  
            </div>
          ))}  
        </div>
      </div>    
  );
}