import React, { Fragment, useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import Nav1 from './components/Nav1.js'
import MainSite from './components/MainSite.js'
import Shop from './components/Shop/Shop.js'
import Product from './components/ProductDetails.js'
import Footer from './components/Footer.js'
import ScrollToTop from './components/scrollToTop.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
//import ShopPrewiew from './components/ShopPreview.js'


export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return (
    <Router>
      <div className="w-full h-16" />
      <Nav1 />
      <main>
        <Fragment>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={MainSite} />
            <Route path="/shop">
              <Shop products={products} />
            </Route>
          </Switch>
        </Fragment>
      </main>
      <Footer />
    </Router>
  )
}
