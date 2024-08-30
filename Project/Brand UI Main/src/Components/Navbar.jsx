import React from 'react'
import brand from '../assets/brand_logo.png'
import shoes from '../assets/shoe_image.png'
import '../App.css'


const Navbar = () => {
  return (
    <>

      {/* navbar start */}

      <nav className='sm:pl-[10px] mx-auto max-w-7xl pl-[10px] pr-[10px] sm:pr-[10px] flex flex-wrap justify-between items-center h-[72px]  '>
        <div><img src={brand} className='w-[58px]  sm:w-[75px]' alt="" /></div>
        <div className=' hidden sm:flex flex flex-wrap justify-center items-center'>
          <a href="#" className='lg:tooltip" data-tip="hello'><span className='btn bg-white border-none shadow-none font-bold'>MENU</span></a>
          <a href="#" className='lg:tooltip" data-tip="hello'><span className='btn bg-white border-none shadow-none font-bold'>LOCATION</span></a>
          <a href="#" className='lg:tooltip" data-tip="hello'><span className='btn bg-white border-none shadow-none font-bold'>ABOUT</span></a>
          <a href="#" className='lg:tooltip" data-tip="hello'><span className='btn bg-white border-none shadow-none font-bold'>CONTACT</span></a>
        </div>
        <ul className=" sm:hidden menu menu-horizontal bg-base-200 rounded-box">
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </a>
          </li>
        </ul>
        <div><button className='bg-[#D01C28] text-white w-[4rem] rounded pb-[3px]'>Login</button></div>
      </nav>

      {/* navbar end */}

    </>
  )
}

export default Navbar
