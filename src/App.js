import React, { Fragment, useState, useEffect } from 'react';
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

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Checkout from './components/CheckoutForm/Checkout/Checkout'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [q, setQ] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    setIsLoaded(true);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve()); 
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000)
  };

  const handleUpdateCartQty = async (productId, quantity) => {
      const { cart } = await commerce.cart.update(productId, { quantity });

      setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
      const { cart } = await commerce.cart.remove(productId);

      setCart(cart);
  }

  const handleEmptyCart = async () => {
      const { cart } = await commerce.cart.empty();
      
      setCart(cart);
  }

  const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();

      setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

        setOrder(incomingOrder);
        refreshCart();
    } catch (error) {
        setErrorMessage(error.data.error.message);   
    }
}

  useEffect(() => {
    fetchProducts();
    fetchCart();
    //setTimeout(() => {
      //setIsLoaded(true);
    //}, 3000);
  }, []);

  return (
    <Router>
      {isLoaded ? (
        isSearchActive ? (<SearchResults />) :
        <div className="wrapper max-w-screen-lg mx-auto">
          <div className="w-full h-16 sm:hidden" />
          <Nav1 cart={cart} />
          <main>
            <Fragment>
              <ScrollToTop />
              <Switch>
                <Route exact path="/">
                  <MainSite products={products} />
                </Route>
                <Route path="/shop">
                  <Shop products={products} onAddToCart={handleAddToCart} />
                </Route>
                <Route exact path="/cart">
                  <Cart
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                  />
                </Route>
                <Route exact path="/checkout">
                  <Checkout
                    cart={cart}
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
                    <ProductDetails
                      products={products}
                      onAddToCart={handleAddToCart}
                    />
                  }
                ></Route>
              </Switch>
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
