import React from 'react';
import Nav from './components/Nav.js'
import main1Mobile from './pics/main1-mobile.jpg'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        <div className="">
          <div className="">
            <img 
              className="" 
              src={main1Mobile} 
              alt="candles" 
            />
          </div>
        </div>
        {/* <MainSite /> */}
        {/* --> <Shop /> */}
        {/* <Products /> */}
        {/* <Shop />     */}
        {/* <Contact />  */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
