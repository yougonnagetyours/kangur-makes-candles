import React, { useState, useEffect } from 'react'
import {Link, useHistory } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'

import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

const steps = ['Adres dostawy', 'Szczegóły płatności'];

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

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  }

  let Confirmation = () => order.customer ? (
    <>
        <div>
            <div className="text-2xl text-center tracking-widest">{order.customer.firstname}, Dziękujemy za zakup</div>
            <div className="divide-y" />
            <div className="text-center text-base tracking-widest">Nr zamówienia: {order.customer_reference}</div>
            <Link to="/shop" className="text-center text-base tracking-widest border-b-2 border-black" >Wróć do sklepu</Link>
        </div>
    </>
  ) : (
    <div className="text-2xl text-center tracking-widest">
        Ładowanie ..
    </div>
  );

  if (error) {
      <>
          <div className="text-2xl text-center tracking-widest">Error: {error}</div>
          <br />
          <Link to="/shop" className="text-center text-base tracking-widest border-b-2 border-black" >Wróć do sklepu</Link>
      </>
  }

  const Form = () => (activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} />
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} />)

  return (
    <>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        
    </>
  )
}

export default Checkout
