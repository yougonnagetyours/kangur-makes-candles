import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { SearchIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import brand from '../pics/candles.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const navigation = [
  { name: 'Sklep', path: '/shop', current: false },
  { name: 'O nas', path: '#', current: false },
  { name: 'Kontakt', path: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav() {
  return (
    <div className="border-b">
    <Disclosure as="nav" className="bg-white = fixed top-0 right-0 w-full h-16 sm:static sm:h-auto">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={brand}
                      alt="candles"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={brand}
                      alt="candles"
                    />
                    <p className="tracking-wider mx-2">soyaCandles</p>
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
                <button className="bg-white p-1 rounded-full text-black">
                  <span className="sr-only">View notifications</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="bg-white p-1 rounded-full text-black focus:outline-none">
                  <span className="sr-only">View notifications</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link to={item.path}>
                    <div
                      key={item.name}
                      className={classNames(
                        item.current ? 'underline text-black' : 'text-black',
                        'block px-3 py-2 rounded-md text-base tracking-widest'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                     {item.name}
                    </div>
                 </Link>
               ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
    <div className="h-16 sm:hidden"></div>
    </div>
  );
}