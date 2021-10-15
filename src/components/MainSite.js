import React from 'react'
import ShopPreview from '../components/ShopPreview.js'
import main1 from '../pics/main1.jpg'
import main2 from '../pics/main2.jpg'
import main3 from '../pics/main3.jpg'
import candle1 from '../pics/candle1.jpg'
import candle2 from '../pics/candle2.jpg'
import candle3 from '../pics/candle3.jpg'
import candle4 from '../pics/candle4.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

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
            <p className="text-2xl sm:text-4xl mx-6 mt-3 tracking-widest">Witaj w soyaCandles</p>
            <p className="text-sm font-light sm:text-xl mx-6 mt-3 tracking-widest">Poznaj produkty bamburcia</p>
            <div className="mx-auto mt-5 mb-2 py-2 border-2 border-black cursor-pointer w-auto">
                <p className="text-center tracking-wider">Poznaj produkty bamburcia</p>
            </div>
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
            <p className="text-2xl sm:text-4xl mx-6 mt-3 tracking-widest">Naturalne składniki</p>
            <p className="text-sm font-light sm:text-xl mx-6 mt-3 tracking-widest">To coś co wyróżnia soyaCandles</p>
          </div>
        </div>
        <ShopPreview />
        <div className="4throw box-border mb-8">
          <div className="">
            <img 
              className="block" 
              src={main3} 
              alt="candles" 
            />
          </div>
        </div>
      </div>    
  );
}