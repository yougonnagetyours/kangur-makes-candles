import React from "react";
import pulsatingBrand from '../pics/kangaroo.png'

const CheckoutLoader = () => {
  return (
    <div className="fixed bg-white left-0 top-0 w-full h-screen grid grid-cols-1 gap-4 place-content-center">
      <div className='mb-20'>
        <div className="flex justify-center animate-pulse">
          <div className="flex-shrink-0">
            <div className="flex justify-center">
              <img
                className="block sm:hidden h-8 w-auto"
                src={pulsatingBrand}
                alt="candles"
              />
              <img
                className="hidden sm:block h-12 w-auto"
                src={pulsatingBrand}
                alt="candles"
                />
              <div className="ml-2 mr-2">
                <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">Kangur</p>
                <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">MakesCandles</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">Twoje zamówienie jest w trakcie realizacji...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLoader;
