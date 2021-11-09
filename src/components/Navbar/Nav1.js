import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { SearchIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom"
import insta from '../../pics/instagram.png'
import fb from '../../pics/facebook.png'
import brand from '../../pics/kangaroo.png'
//import Footer from './Footer.js'

const navigation = [
  { name: 'Sklep', path: '/shop', current: false },
  { name: 'O nas', path: '#', current: false },
  { name: 'Kontakt', path: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav1 = ({ cart }) => {
  return (
    <div className="">
      <Menu as="div" className="bg-white fixed top-0 right-0 w-full sm:static">
        {({ open }) => (
        <>  
        <div className={classNames(open ? "" : "border-b", "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8")}>
        <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
          </Menu.Button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-10 w-auto"
                      src={brand}
                      alt="candles"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={brand}
                      alt="candles"
                    />
                    <div className="text-containerr ml-2 mr-2">
                      <p className="text-sm tracking-wider font-poiret-one font-bold">Kangur</p>
                      <p className="text-sm tracking-wider font-poiret-one font-bold">MakesCandles</p>
                    </div>
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.path}>
                        <div
                          key={item.name}
                          className={classNames(
                            item.current ? 'border-2 border-gray-900 text-black' : 'text-black hover:border-2 border-gray-700 hover:text-gray-700 hover:underline',
                            'px-3 py-2 rounded-md text-sm tracking-widest'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/cart">
                <button className="flex bg-white p-1 rounded-full text-black focus:outline-none">
                  <span className="sr-only">Zobacz koszyk</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  <p>({cart.total_items})</p>
                </button>
                </Link>
              </div>

        </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        
          <Menu.Items className="absolute left-0 w-full origin-top-right bg-white divide-y divide-gray-100 text-center focus:outline-none">
            <div className="px-1 py-12 border-b">
              <div>
                {navigation.map((item) =>(
                  <Menu.Item>
                    <Link to={item.path}>
                      <div
                        key={item.name}
                        className={classNames(
                          item.current ? 'underline text-black' : 'text-black',
                         'block px-2 py-5 rounded-md text-base tracking-widest'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                       {item.name}
                      </div>
                    </Link>
                  </Menu.Item>
                ))}
              </div>
              <div>
                <div className="my-5 w-full h-6 flex justify-center">
                  <a href="https://www.instagram.com/?hl=en" className="block mr-6">
                    <img 
                      className="block h-full" 
                      src={insta} 
                      alt="candles" 
                    />
                  </a>
                  <a href="https://www.facebook.com/" className="block">
                  <img 
                      className="block h-full" 
                      src={fb} 
                      alt="candles" 
                    />  
                  </a> 
                </div>  
              </div>    
            </div>
          </Menu.Items>
        </Transition>
        </>
        )}
      </Menu>
    </div>
  )
}

export default Nav1