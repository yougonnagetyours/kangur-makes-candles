import React from 'react';
import Nav from './components/Nav.js'
import main1Mobile from './pics/main1-mobile.jpg'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="main1Container">
            <img 
              className="block lg:hidden h-8 w-auto" 
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
