import React from 'react'
import insta from '../../pics/instagram.png'
import fb from '../../pics/facebook.png'



export default function Footer() {
  return (
      <div>
        <div className="my-3 w-full h-6 flex justify-center">
          <a href="https://www.instagram.com/?hl=en" className="block mr-6">
            <img 
                className="block h-full" 
                src={insta} 
                alt="candles" 
              />
          </a>
          <a href="https://www.facebook.com/" className="block">
            <img 
                className="block h-full" 
                src={fb} 
                alt="candles" 
              />  
           </a> 
        </div>  
        <div className="my-3 text-center">
          <p className="text-sm font-light tracking-widest">@2021, KangurMakesCandles</p>
        </div>
      </div>    
  );
}