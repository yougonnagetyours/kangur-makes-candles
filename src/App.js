import React, { Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { commerce } from './lib/commerce';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './reducers/productsSlice';
import { fetchCart, refreshCart } from './reducers/cartSlice';

import { About, Cart, Checkout, Contact, Footer, MainSite, Nav1, ProductDetails, SearchResults, Shop } from './components';
import ScrollToTop from './ui/scrollToTop.js';
import Loader from './ui/Loader.js';
import BusyLoader from './ui/BusyLoader.js';
import ShoppingPopup from './ui/ShoppingPopup.js';

function App() {
  //REDUX
  const dispatch = useDispatch();

  const {products, isLoaded} = useSelector((state) => state.products);
  const isAddedToCart = useSelector(state => state.cart.isAddedToCart);
  const isBusy = useSelector(state => state.cart.isBusy);
  const isSearchActivee = useSelector(state => state.search.isSearchActive)

  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  // const [isSearchPanelActive, setIsSearchPanelActive] = useState(false);

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

        setOrder(incomingOrder);
        dispatch(refreshCart);
    } catch (error) {
        setErrorMessage(error.data.error.message);   
        dispatch(refreshCart); //ferfeshing in this place ONLY FOR TEST VERSION !!!
    }
}

  // const handleSearchPanelActive = () => {
  //   setIsSearchPanelActive(!isSearchPanelActive);
  // }
  
  useEffect(() => {
    dispatch(fetchProducts);
    dispatch(fetchCart);
  }, []);

  console.log(products);
  return (
    <Router>
      {isLoaded ? (
        <div className="wrapper max-w-screen-lg mx-auto">
          <div className="w-full h-16 sm:hidden" />
          <Nav1 />
          <main>
            <Fragment>
              <ScrollToTop />
              {isSearchActivee 
                ? (<SearchResults />) 
                : (
              <Switch>
                <Route exact path="/">
                  <MainSite />
                </Route>
                <Route path="/shop">
                  <Shop />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/checkout">
                  <Checkout
                    order={order}
                    onCaptureCheckout={handleCaptureCheckout}
                    error={errorMessage}
                  />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route
                  exact
                  path="/:id"
                  children={
                    <ProductDetails products={products} />
                  }
                ></Route>
              </Switch>)}
            </Fragment>
          </main>
          <Footer />
          {isAddedToCart ? <ShoppingPopup /> : null}
          {isBusy ? 
            <div>
              <BusyLoader />
            </div> :
            null
          }        
        </div>
      ) : (
        <Loader />
      )}
    </Router>
  )
}

export default App;
