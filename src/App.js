import React from 'react';
import Nav from './components/Nav.js'
import main1Mobile from './pics/main1-mobile.jpg'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        <div className="1strow box-border mx-6 mb-3 lg:flex">
          <div className="lg:mr-3">
            <img 
              className="block" 
              src={main1Mobile} 
              alt="candles" 
            />
          </div>
          <p className="text-2xl sm:text-4xl mt-3 tracking-wider">Witaj w soyaCandles</p>
        </div>
        <div className="2ndrow flex justify-between box-border mx-6 ">
          <div className="w-2/5">
            <img 
              className="block" 
              src={main1Mobile} 
              alt="candles" 
            />
          </div>
          <div className="w-2/5">
            <img 
              className="block" 
              src={main1Mobile} 
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
