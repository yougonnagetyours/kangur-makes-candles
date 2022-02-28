import React, { Fragment, useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { fetchProducts } from './reducers/productsSlice';
import { fetchCart } from './reducers/cartSlice';

import { commerce } from './lib/commerce';

import Nav1 from './components/Navbar/Nav1.js';
import MainSite from './components/MainSite/MainSite.js';
import Shop from './components/Shop/Shop.js';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart.js';
import Footer from './components/Footer/Footer.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import ScrollToTop from './components/scrollToTop.js';
import Loader from './components/Loader.js';
import ShoppingPopup from './components/ShoppingPopup.js';
import SearchResults from './components/SearchResults.js';

import Checkout from './components/CheckoutForm/Checkout/Checkout'

import store from './store';


function App() {
  //REDUX
  const products = useSelector((state) => state.products, shallowEqual);
  const cart = useSelector(state => state.cart);

  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [q, setQ] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchPanelActive, setIsSearchPanelActive] = useState(false);

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

        setOrder(incomingOrder);
        store.refreshCart();
    } catch (error) {
        setErrorMessage(error.data.error.message);   
    }
}

  const handleInput = (e) => {
    setQ(e.target.value);
    setIsSearchActive(true);
    if (e.target.value === ''){
      setIsSearchActive(false);
    }
  };

  const search = (filterData) => {
    return filterData.filter((filteredItem) =>
      filteredItem.name.toLowerCase().includes(q.toLowerCase())
    );
  };

  const clearInput = () => {
    setQ('');
    setIsSearchActive(false);
  }

  const handleSearchPanelActive = () => {
    setIsSearchPanelActive(!isSearchPanelActive);
  }

  const handleAddToCartPopup = () => {
    setIsAddedToCart(true);
    // setInterval(() => {
    //   setIsAddedToCart(false);
    // }, 1200)
  }

  useEffect(() => {
    store.dispatch(fetchProducts);
    setIsLoaded(true);
    // fetchCart();
    store.dispatch(fetchCart);
  }, []);

  console.log(cart);
  return (
    <Router>
      {isLoaded ? (
        <div className="wrapper max-w-screen-lg mx-auto">
          <div className="w-full h-16 sm:hidden" />
          <Nav1 
            cart={cart} 
            q={q} handleInput={handleInput} 
            clearInput={clearInput} 
            isSearchActive={isSearchActive}
            isSearchPanelActive={isSearchPanelActive}
            handleSearchPanelActive={handleSearchPanelActive}
            />
          <main>
            <Fragment>
              <ScrollToTop />
              {isSearchActive 
                ? (<SearchResults  
                    search={search} 
                    clearInput={clearInput} 
                    handleSearchPanelActive={handleSearchPanelActive}
                    />) 
                : (
              <Switch>
                <Route exact path="/">
                  <MainSite />
                </Route>
                <Route path="/shop">
                  <Shop clearInput={clearInput} handleAddToCartPopup={handleAddToCartPopup} />
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
        </div>
      ) : (
        <Loader />
      )}
    </Router>
  )
}

export default App;
