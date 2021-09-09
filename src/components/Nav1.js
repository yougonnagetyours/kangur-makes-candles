import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { SearchIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom"

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
    <div className="w-56 text-right fixed top-16">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
        <>  
        <div className="sm:hidden">
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
          </Menu.Button>
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
          <Menu.Items className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
