import { Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, ShoppingCartIcon, SearchIcon } from '@heroicons/react/outline';

import insta from '../../pics/instagram.png';
import fb from '../../pics/facebook.png';
import brand from '../../pics/kangaroo.png';

const navigation = [
  { name: 'Sklep', path: '/shop' },
  { name: 'O nas', path: '/about' },
  { name: 'Kontakt', path: '/contact' }
]

// for further navlinks styling
// const isActiveStyle = 'border-2 border-gray-900 text-black px-3 py-2 rounded-md text-lg tracking-widest';
// const isNotActiveStyle = 'text-black hover:border-2 border-gray-700 hover:text-gray-700 hover:underline px-3 py-2 rounded-md text-lg tracking-widest'

const Nav1 = ({ isSearchPanelActive, handleSearchPanelActive }) => {
  const cart = useSelector(state => state.cart.fetchedData);
  const q = useSelector(state => state.search.q);
  const isSearchActive = useSelector(state => state.search.isSearchActive);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch({type: 'HANDLE_INPUT', payload: e.target.value});
    if (e.target.value === ''){
      dispatch({type: 'SET_SEARCH_INACTIVE'});
    }
  };
  
  return (
    <div className='fixed sm:relative top-0 left-0 bg-white w-full sm:border sm:border-black sm:mb-20 sm:shadow-lg'>
      <Menu as="div">
        {({ open }) => (
          <>  
            <div className={`${open ? null : "border-b"}, "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"`}>
              <div className="relative flex items-center justify-between h-16 sm:h-24">
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
                        className="block sm:hidden h-8 w-auto"
                        src={brand}
                        alt="candles"
                      />
                      <img
                        className="hidden sm:block h-12 w-auto"
                        src={brand}
                        alt="candles"
                      />
                      <div className="text-containerr ml-2 mr-2">
                        <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">Kangur</p>
                        <p className="text-sm sm:text-base tracking-wider font-poiret-one font-bold">MakesCandles</p>
                      </div>
                    </div>
                  </Link>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link to={item.path}>
                          <div
                            key={item.name}
                            className='text-black hover:border-2 border-gray-700 hover:text-gray-700 hover:underline px-3 py-2 rounded-md text-lg tracking-widest'                           
                          >
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div>
                  <button className="flex bg-white p-1 rounded-full text-black focus:outline-none" onClick={handleSearchPanelActive}>
                    <span className="sr-only">Szukaj</span>
                    {isSearchPanelActive 
                      ? <XIcon className="block h-6 w-6" aria-hidden="true" /> 
                      : <SearchIcon className="h-5 w-5 sm:h-7 sm:w-7" aria-hidden="true" 
                    />}
                  </button>
                  </div>
                  <Link to="/cart">
                  <button className="flex bg-white p-1 rounded-full text-black focus:outline-none">
                    <span className="sr-only">Zobacz koszyk</span>
                    <ShoppingCartIcon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                    <p className="sm:text-lg">({cart.total_items})</p>
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
                            key={item.id}
                            className= 'text-black block px-2 py-5 rounded-md text-base tracking-widest'
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
                          alt="fb-candles" 
                        />
                      </a>
                      <a href="https://www.facebook.com/" className="block">
                      <img 
                          className="block h-full" 
                          src={fb} 
                          alt="insta-candles" 
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
      <div className={`${!isSearchPanelActive ? 'hidden' : null} relative sm:absolute top-0 sm:top-24 right-0 px-6 py-4 flex items-center sm:w-60`}>
        <input 
          className='w-full px-4 py-2 tracking-widest font-light border border-black rounded-sm'
          placeholder="Szukaj..."
          value={q}
          onChange={(e) => handleInput(e)}
        />
        {isSearchActive 
          ? <button 
              className='absolute px-2 right-5' 
              onClick={console.log('clear input')}
            >
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            </button> 
          : null} 
      </div>
    </div>
  )
}

export default Nav1