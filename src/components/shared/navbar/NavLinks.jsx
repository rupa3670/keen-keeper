"use client"
import Link from 'next/link';
import { House, Clock4, ChartLine,  } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';

const NavLinks = () =>{
    const pathname=usePathname()
 const links= [
    {href:'/',label:'Home',icon:<House size={18}/>},
    {href:'/timeline',label:'Timeline',icon:<Clock4 size={18}/>},
    {href:'/stats',label:'Stats',icon:<ChartLine size={18}/>},
 ]
    return (
       <>
       {links.map(({href,label,icon}) =>(
        <li key={href}>
            <Link href={href} className={pathname==href ?'bg-[#244D3F]  text-white hover::bg-[#68bea0]':'text-gray-500'}>{icon}{label}
            </Link>
        </li>
       ))}
       </>
    );
};

export default NavLinks;