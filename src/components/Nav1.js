import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { SearchIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom"
import brand from '../pics/candles.png'

const navigation = [
  { name: 'Sklep', path: '/shop', current: false },
  { name: 'O nas', path: '#', current: false },
  { name: 'Kontakt', path: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav1() {
  return (
    <div className="">
      <Menu as="div" className="bg-white fixed top-0 right-0 w-full sm:static">
        {({ open }) => (
        <>  
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
                  <span className="sr-only">Szukaj</span>
                  <SearchIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <button className="flex bg-white p-1 rounded-full text-black focus:outline-none">
                  <span className="sr-only">Zobacz koszyk</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  <p>(0)</p>
                </button>
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
            <div className="px-1 py-1 ">
              {navigation.map((item) =>(
                <Menu.Item>
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
                </Menu.Item>
              ))}
               {/*<Menu.Item>
                 {({ active }) => (
            //       <button*
            //         className={`${
            //           active ? 'bg-violet-500 text-white' : 'text-gray-900'
            //         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            //       >
            //         {active ? (
            //           <EditActiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         ) : (
            //           <EditInactiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         )}
            //         Edit
            //       </button>
            //     )}
            //   </Menu.Item>
            //   <Menu.Item>
            //     {({ active }) => (
            //       <button
            //         className={`${
            //           active ? 'bg-violet-500 text-white' : 'text-gray-900'
            //         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            //       >
            //         {active ? (
            //           <DuplicateActiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         ) : (
            //           <DuplicateInactiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         )}
            //         Duplicate
            //       </button>
            //     )}
            //   </Menu.Item>
            // </div>
            // <div className="px-1 py-1">
            //   <Menu.Item>
            //     {({ active }) => (
            //       <button
            //         className={`${
            //           active ? 'bg-violet-500 text-white' : 'text-gray-900'
            //         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            //       >
            //         {active ? (
            //           <ArchiveActiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         ) : (
            //           <ArchiveInactiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         )}
            //         Archive
            //       </button>
            //     )}
            //   </Menu.Item>
            //   <Menu.Item>
            //     {({ active }) => (
            //       <button
            //         className={`${
            //           active ? 'bg-violet-500 text-white' : 'text-gray-900'
            //         } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            //       >
            //         {active ? (
            //           <MoveActiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         ) : (
            //           <MoveInactiveIcon
            //             className="w-5 h-5 mr-2"
            //             aria-hidden="true"
            //           />
            //         )}
            //         Move
            //       </button>
            //     )}
            //   </Menu.Item>*/}
            </div>
          </Menu.Items>
        </Transition>
        </>
        )}
      </Menu>
    </div>
  )
}

// function EditInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function EditActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 13V16H7L16 7L13 4L4 13Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function DuplicateInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 4H12V12H4V4Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path
//         d="M8 8H16V16H8V8Z"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function DuplicateActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4 4H12V12H4V4Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path
//         d="M8 8H16V16H8V8Z"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//     </svg>
//   )
// }

// function ArchiveInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="8"
//         width="10"
//         height="8"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="12"
//         height="4"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function ArchiveActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="8"
//         width="10"
//         height="8"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <rect
//         x="4"
//         y="4"
//         width="12"
//         height="4"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function MoveInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function MoveActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
//     </svg>
//   )
// }

// function DeleteInactiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="6"
//         width="10"
//         height="10"
//         fill="#EDE9FE"
//         stroke="#A78BFA"
//         strokeWidth="2"
//       />
//       <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
//       <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
//     </svg>
//   )
// }

// function DeleteActiveIcon(props) {
//   return (
//     <svg
//       {...props}
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect
//         x="5"
//         y="6"
//         width="10"
//         height="10"
//         fill="#8B5CF6"
//         stroke="#C4B5FD"
//         strokeWidth="2"
//       />
//       <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
//       <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
//     </svg>
//   )
// }
