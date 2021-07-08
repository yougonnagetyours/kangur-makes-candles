import React from 'react'
import Nav from './components/Nav.js'
import MainSite from './components/MainSite.js'


export default function App() {
  return (
    <div>
      <Nav />
      <main>
        {/* Here are components which are switched by react router */}
        <MainSite />
        <Shop />
        {/* <Products /> */}
        {/* <About />     */}
        {/* <Contact />  */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
