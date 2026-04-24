import React from 'react';
import Link from 'next/link';
import { House,Clock4,ChartLine,  } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm border-b border-gray-100'>
            <div className="navbar mx-auto px-4 md:px-10 ">
  <div className="flex-1">
    <h2 className=" text-2xl font-bold">Keen<span className='text-[#244D3F]'>Keeper</span></h2>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal   text-gray-500  font-medium">
      <li><Link href="" className='bg-[#244D3F] text-white hover:bg-[#68bea0]'><House size={18}/>Home</Link></li>
      <li><Link href="/timeline"><Clock4 size={18}/>Timeline</Link></li>
      <li><Link href="/stats"><ChartLine size={18} />Stats</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;