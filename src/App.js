import React from 'react';
import Nav from './components/Nav.js'
import main1Mobile from './pics/main1-mobile.jpg'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        <div className="1strow box-border mx-6 lg:flex">
          <div className="lg:mr-2">
            <img 
              className="block" 
              src={main1Mobile} 
              alt="candles" 
            />
          </div>
          <p className="text-xl sm:text-4xl my-3 tracking-wider">Witaj w soyaCandles</p>
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
