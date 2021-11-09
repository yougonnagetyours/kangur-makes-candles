import React, { useState, useEffect } from 'react'
import {Link, useHistory } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
    
  const history = useHistory();

  useEffect(() => {
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

            console.log(token);

            setCheckoutToken(token);
        } catch (error) {
            history.pushState('/');
        }
    }

    generateToken();
}, [cart]);

  return (
    <div>
      
    </div>
  )
}

export default Checkout
