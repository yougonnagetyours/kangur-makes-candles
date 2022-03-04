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

  const products = useSelector((state) => state.products.fetchedData);
  const isLoaded = useSelector((state) => state.products.isLoaded);
  const isAddedToCart = useSelector(state => state.cart.isAddedToCart);
  const isBusy = useSelector(state => state.cart.isBusy);
  const isSearchActivee = useSelector(state => state.search.isSearchActive)

  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [q, setQ] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchPanelActive, setIsSearchPanelActive] = useState(false);

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

        setOrder(incomingOrder);
        dispatch(refreshCart);
    } catch (error) {
        setErrorMessage(error.data.error.message);   
    }
}

  // const search = (filterData) => {
  //   return filterData.filter((filteredItem) =>
  //     filteredItem.name.toLowerCase().includes(searchState.q.toLowerCase())
  //   );
  // };

  // these go to reducer
  const clearInput = () => {
    setQ('');
    setIsSearchActive(false);
  }

  const handleSearchPanelActive = () => {
    setIsSearchPanelActive(!isSearchPanelActive);
  }
  //
  useEffect(() => {
    dispatch(fetchProducts);
    dispatch(fetchCart);
  }, []);

  return (
    <Router>
      {isLoaded ? (
        <div className="wrapper max-w-screen-lg mx-auto">
          <div className="w-full h-16 sm:hidden" />
          <Nav1  
            isSearchPanelActive={isSearchPanelActive}
            handleSearchPanelActive={handleSearchPanelActive}
            />
          <main>
            <Fragment>
              <ScrollToTop />
              {isSearchActivee 
                ? (<SearchResults   
                    clearInput={clearInput} 
                    handleSearchPanelActive={handleSearchPanelActive}
                    />) 
                : (
              <Switch>
                <Route exact path="/">
                  <MainSite />
                </Route>
                <Route path="/shop">
                  <Shop clearInput={clearInput} />
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
