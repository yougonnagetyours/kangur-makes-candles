import React from 'react'
import Product from './Product/Product.js'
import candle1 from '../../pics/candle1.jpg'
import candle2 from '../../pics/candle2.jpg'
import candle3 from '../../pics/candle3.jpg'
import candle4 from '../../pics/candle4.jpg'
import main2 from '../../pics/main2.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const candles = [
  { src: candle1, title:"Let's stay home", price:"49,90 zł" },
  { src: candle2, title:"Bitch.. You Got This!", price:"34,99 zł"  },
  { src: candle3, title:"salt sea", price:"52,90 zł"  },
  { src: candle4, title:"Urban | 01", price:"50,00 zł"  },
]

const Shop = ({ products }) => {
  return (
    <>
        <div className="3rdrow box-border mb-10 lg:flex lg:flex-row-reverse lg:mb-20">
          <div className="lg:mr-3 max-w-screen-lg">
            <img 
              className="block" 
              src={main2} 
              alt="candles" 
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl sm:text-4xl mx-6 mt-3 tracking-widest">Sklep</p>
            <p className="text-sm font-light sm:text-xl mx-6 mt-3 tracking-widest">Poszukaj dla siebie coś odpowiedniego</p>
          </div>
        </div> 
        <div className="flex flex-wrap justify-around box-border mx-2.5 my-6 ">
          {products.map((product) => (
            <div className="w-10/12 mb-20" item key={product.id}>
              <Link to="/product">
                <Product product={product} onAddToCart={""} />
              </Link>
            </div>
          ))}  
        </div>  
    </>    
  );
}

export default Shop;