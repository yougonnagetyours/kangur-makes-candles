import React from 'react'
import Nav from './components/Nav.js'
import main1Mobile from './pics/main1-mobile.jpg'
import candle1 from './pics/candle1.jpg'
import candle2 from './pics/candle2.jpg'
import candle3 from './pics/candle3.jpg'
import candle4 from './pics/candle4.jpg'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        <div className="1strow box-border mb-10 lg:flex lg:mb-20">
          <div className="lg:mr-3">
            <img 
              className="block" 
              src={main1Mobile} 
              alt="candles" 
            />
          </div>
          <p className="text-2xl sm:text-4xl mx-6 my-10 tracking-wider">Witaj w soyaCandles</p>
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
        {/* <MainSite /> */}
        {/* <Shop /> */}
        {/* <Products /> */}
        {/* <About />     */}
        {/* <Contact />  */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
