import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import main1 from '../../pics/main1.jpg';
import main2 from '../../pics/main2.jpg';
import main3 from '../../pics/main3.jpg';

const MainSite = () => {
  
  const products = useSelector((state) => state.products.fetchedData);

  return (
      <div>  
        <div className="1strow box-border sm:border sm:border-black mb-10 lg:flex lg:mb-20 sm:shadow-xl">
          <div className="sm:flex sm:justify-center sm:items-center lg:mr-3 sm:max-h-80 sm:overflow-hidden">
            <img 
              className="block" 
              src={main1} 
              alt="candles" 
            />
          </div>
          <div className="mt-6 sm:w-max lg:text-center">
            <p className="text-2xl md:text-3xl mx-6 mt-6 tracking-widest">Naturalne składniki</p>
            <p className="text-sm font-light md:text-base mx-6 mt-3 tracking-widest">To coś co wyróżnia KangurMakesCandles</p>
            <Link to="/shop">
              <div className="mx-6 mt-6 mb-2 py-2 border-2 border-black cursor-pointer w-auto sm:shadow-lg">
                  <p className="text-center tracking-wider">Poznaj nasze produkty</p>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="3rdrow box-border lg:mb-20">
          <div className="sm:hidden">
            <img 
              className="block" 
              src={main2} 
              alt="candles" 
            />
          </div>
          <div className="mt-10 mb-6">
            <p className="text-2xl text-center md:text-4xl tracking-widest">Nowości</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="2ndrow flex flex-wrap box-border mx-2.5 my-6 ">
            {products.map((product) => (
              <div className="mb-4 w-1/2 sm:w-1/3 md:w-1/4 px-2 sm:mb-10" key={product.id}>
                <div className="border border-black sm:shadow-lg">
                  <Link to={`/${product.id}`}>
                    <img 
                      className="block" 
                      src={product.image.url} 
                      alt={product.name}   
                    />
                  </Link>
                </div>  
              </div>
            ))}  
          </div>
        </div>
        <div className="4throw box-border mb-8">
          <div className="sm:flex sm:justify-center sm:items-center sm:max-h-80 sm:overflow-hidden">
            <img 
              className="block" 
              src={main3} 
              alt="candles" 
            />
          </div>
        </div>
      </div>    
  );
}

export default MainSite;
