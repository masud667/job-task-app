import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  const navLinks = (
    <>
      <li><Link className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300' href="/">Home</Link></li>
      <li><Link className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300' href="/gallery">Gallery</Link></li>
      <li><Link className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300' href="/about">About</Link></li>
      <li><Link className='text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300' href="/login">Login</Link></li>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm sticky">
      <div className='navbar w-11/12 mx-auto'>
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <Link href="/" className="ml-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-bold">ArtifyHub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/dashboard" className="btn bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 shadow-md hover:shadow-lg transition-shadow">Dashboard</Link>
      </div>
      </div>
    </div>
  );
}
