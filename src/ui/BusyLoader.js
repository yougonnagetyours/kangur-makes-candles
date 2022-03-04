import React from "react";
import pulsatingBrand from '../pics/kangaroo.png'

const BusyLoader = () => {
  return (
    <div className="fixed bg-white bg-opacity-80 left-0 top-0 w-full h-screen grid grid-cols-1 gap-4 place-content-center">
      <div className='mb-20'>
        <div className="flex justify-center animate-pulse">
          <div className="flex-shrink-0 flex items-center">
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
              <div className="text-containerr ml-2 mr-2">
                <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">Kangur</p>
                <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">MakesCandles</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BusyLoader;
