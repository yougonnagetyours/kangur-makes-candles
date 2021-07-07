import React from 'react'
import candle1 from './pics/candle1.jpg'
import candle2 from './pics/candle2.jpg'
import candle3 from './pics/candle3.jpg'
import candle4 from './pics/candle4.jpg'

export default function MainSite() {
  return (
<div className="1strow box-border mb-10 lg:flex lg:mb-20">
        <div>  
          <div className="lg:mr-3">
            <img 
              className="block" 
              src={main1Mobile} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-4xl mx-6 tracking-wider">Witaj w soyaCandles</p>
            <p className="text-sm sm:text-xl mx-6 tracking-wider">Poznaj produkty bamburcia</p>
          </div>
        </div>
        <div className="2ndrow flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          <div className="border border-black w-2/5 p-5 mb-6">
            <img 
              className="block" 
              src={candle1} 
              alt="candles" 
            />
          </div>
          <div className="border border-black w-2/5 p-5 mb-6">
            <img 
              className="block" 
              src={candle2} 
              alt="candles" 
            />
          </div>
          <div className="border border-black w-2/5 p-5 mb-6">
            <img 
              className="block" 
              src={candle3} 
              alt="candles" 
            />
          </div>
          <div className="border border-black w-2/5 p-5 mb-6">
            <img 
              className="block" 
              src={candle4} 
              alt="candles" 
            />
          </div>
        </div>
      </div>    
  );
}