import React from 'react'
import Nav from './components/Nav.js'
import MainSite from './components/MainSite.js'
import Shop from './components/Shop.js'
import Product from './components/Product.js'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        {/*<MainSite />*/}
        {/*<Shop />      */}
        <Product />
        {/* <About />    */}
        {/* <Contact />  */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
