import React from 'react'
import Nav from './components/Nav.js'
import MainSite from './components/MainSite.js'
import Shop from './components/Shop.js'
import Product from './components/Product.js'
import Footer from './components/Footer.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


export default function App() {
  return (
    <Router>
      <Nav />
      <Link to="/product">Product</Link>
      <Switch>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/">
            <MainSite />
          </Route>
      </Switch>
      <main>
        {/* Here are components which are switched by react router */}
        {/*<MainSite />  */}
        {/*<Shop />      */}
        {/*<Product />   */}
        {/* <About />    */}
        {/* <Contact />  */}
      </main>
      {/* <Footer /> */}
    </Router>
  )
}
