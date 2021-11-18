import React from 'react'

import main1 from '../../pics/main1.jpg'
import main2 from '../../pics/main2.jpg'
import main3 from '../../pics/main3.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const MainSite = ({ products }) => {
  return (
      <div>  
        <div className="1strow box-border mb-10 lg:flex lg:mb-20">
          <div className="lg:mr-3">
            <img 
              className="block" 
              src={main1} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-4xl mx-6 mt-6 tracking-widest">Naturalne składniki</p>
            <p className="text-sm font-light sm:text-xl mx-6 mt-3 tracking-widest">To coś co wyróżnia KangurMakesCandles</p>
            <Link to="/shop">
              <div className="mx-6 mt-6 mb-2 py-2 border-2 border-black cursor-pointer w-auto">
                  <p className="text-center tracking-wider">Poznaj nasze produkty</p>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="3rdrow box-border mb-20">
          <div className="sm:hidden">
            <img 
              className="block" 
              src={main2} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl  sm:text-4xl mx-6 mt-3 tracking-widest">Nowości</p>
          </div>
        </div>
        <div className="2ndrow flex flex-wrap justify-around box-border mx-2.5 mt-10 mb-6 ">
          {products.map((product) => (
            <div className="border border-black w-2/5 p-5 mb-6">
              <Link to={`/${product.id}`}>
                <img 
                  className="block" 
                  src={product.image.url} 
                  alt={product.name}   
                />
              </Link>
            </div>
          ))}  
        </div>
        {/*<ShopPreview />*/}
        <div className="4throw box-border mb-8">
          <div className="">
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
