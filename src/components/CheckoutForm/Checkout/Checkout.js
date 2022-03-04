import React, { useState, useEffect } from 'react';
import {Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import { useSelector } from 'react-redux';

import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['Adres dostawy', 'Szczegóły płatności'];

const Checkout = ({ order, onCaptureCheckout, error }) => {
  const cart = useSelector(state => state.cart.fetchedData);

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false); 
  const history = useHistory();

  useEffect(() => {
    const generateToken = async () => {
        try {
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            
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

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000)
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
  ) : isFinished ? (
    <>
        <div className='my-10'>
            <div className="text-2xl text-center tracking-widest">Dziękujemy za zakup</div>
            <div className="divide-y" />
            <div className="text-center text-base tracking-widest">Nr zamówienia: 345424534532</div>
            <div className='flex justify-center'>
              <Link to="/shop" className="block w-max mt-10 mb-6 text-base tracking-widest border-b-2 border-black" >Wróć do sklepu</Link>
            </div>
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
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />)

  return (
    <>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        
    </>
  )
}

export default Checkout;
