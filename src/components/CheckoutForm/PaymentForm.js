import React from 'react';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout, timeout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'Primary', street: shippingData.address, town_city: shippingData.city, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      timeout();

      nextStep();
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <div className="text-lg text-center mt-6 tracking-widest font-medium">Metoda płatności</div>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement className='w-10/12 sm:w-1/2 mx-auto border border-black px-2 py-4 mt-8 mb-10' />
            <div className="flex justify-between w-10/12 mx-auto my-6">
              <button className="text-center text-base tracking-widest cursor-pointer my-2 border-b-2 border-black" onClick={backStep}>Wstecz</button>
              <button 
                type="submit" 
                className="text-red text-center tracking-widest border-2 border-black cursor-pointer px-4 py-2" >
                {`Zapłać ${checkoutToken.live.subtotal.formatted} zł`}
              </button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
