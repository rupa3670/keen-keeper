import React from 'react';
import Link from 'next/link';
import { House, Clock4, ChartLine, Menu, } from 'lucide-react';

const Navbar = () => {
  const navLinks = (
    <>
      <li><Link href="/" className='bg-[#244D3F] text-white hover:bg-[#68bea0]'><House size={18} />Home</Link></li>
      <li><Link href="/timeline"><Clock4 size={18} />Timeline</Link></li>
      <li><Link href="/stats"><ChartLine size={18} />Stats</Link></li>
    </>
  )
  return (
    <div className='bg-white shadow-sm border-b border-gray-100'>
      <div className="navbar max-w-7xl mx-auto px-4 md:px-10 ">
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-1">
              <Menu size={24} />
            </div>
            <ul tabIndex={0} className='menu menu-sm dropdown-content bg-base-100 rounded-box  z-1 mt-3 w-52 p-2 shadow'>{navLinks}</ul>
          </div>
          <h2 className=" text-xl md:text-2xl ml-2 lg:ml-0 font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></h2>

        </div>


        <div className=" navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal gap-3   text-gray-500  font-medium">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;