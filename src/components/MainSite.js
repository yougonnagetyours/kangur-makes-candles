import React from 'react'
import Shop from '../components/Shop.js'
import main1 from '../pics/main1.jpg'
import main2 from '../pics/main2.jpg'
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

export default function MainSite() {
  return (
      <div>  
        <div className="1strow box-border mb-10 lg:flex lg:mb-20">
          <div className="lg:mr-3">
            <img 
              className="block" 
              src={main1} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-4xl mx-6 tracking-wider">Witaj w soyaCandles</p>
            <p className="text-sm sm:text-xl mx-6 tracking-wider">Poznaj produkty bamburcia</p>
          </div>
        </div>
        <div className="2ndrow flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {candles.map((candle) => (
            <div className="border border-black w-2/5 p-5 mb-6">
              <img 
                className="block" 
                src={candle.src} 
                alt="candles" 
              />
            </div>
          ))}  
        </div>
        <div className="3rdrow box-border mb-10 lg:flex lg:flex-row-reverse lg:mb-20">
          <div className="lg:mr-3 max-w-screen-lg">
            <img 
              className="block" 
              src={main2} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-4xl mx-6 tracking-wider">Naturalne składniki</p>
            <p className="text-sm sm:text-xl mx-6 tracking-wider">To coś co wyróżnia soyaCandles</p>
          </div>
        </div>
        <Shop />
      </div>    
  );
}