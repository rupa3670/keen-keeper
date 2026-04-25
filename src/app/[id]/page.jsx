import React from 'react';
import Link from 'next/link';
import {BellDot, Archive,Trash2 } from 'lucide-react'
import CheckInButton from '@/components/checkIn-Button/Check-In-Button';
const AppDetailsPage =async ({params}) => {
    const {id}=await params;
    const res= await fetch("http://localhost:3000/friends.json");
    const friends =await res.json();
    const friend =friends.find(f=>f.id.toString()===id);
    if(!friend){
        return <div className='p-20 text-center'>Friend not found!</div>
    }
    return (
       <div className='min-h-screen bg-gray-50 py-10 px-4'>
        <main className='max-w-5xl mx-auto'>
            
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-1 space-y-4'>
                  <div className='bg-white rounded-[24px] p-8  shadow-sm border border-gray-100 flex flex-col items-center text-center'>
                <img src={friend.picture} alt={friend.name} className='w-24 h-24 rounded-full object-cover mb-4  border-gray-50' />
                 <h2 className="text-lg font-bold text-gray-800 ">{friend.name}</h2>
                <span className={`mt-2 px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ${friend.status==='overdue'?'bg-red-400':friend.status==='almost due'?'bg-orange-400':'bg-green-400'}`}>{friend.status}</span>
            <div className='flex flex-wrap justify-between gap-2 mt-4'>
                {friend.tags.map(tag=>(
                    <span key={tag} className='text-[10px]font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-100 uppercase'>{tag}</span>
                ))}

            </div>
            <p className='text-gray-400 text-sm italic mt-6 font-semibold'>Formal colleague, great mentor</p>
            <p className='text-gray-400 text-xs font-semibold mt-1'>Preferred: email</p>
            </div>
            <div className='grid grid-cols-1 gap-2'>
                <button className='flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors'> <BellDot size={16}/> Snooze 2 weeks</button>
                <button className='flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors'><Archive size={16}/>Archive</button>
                <button className='flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-xl text-sm font-bold text-red-500 hover:bg-gray-50 transition-colors'><Trash2 size={16}/>Delete</button>
            </div>
           
            </div>
           {/* Right column */}
           <div className='lg:col-span-2 space-y-6'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-white p-6 rounded-[20px] border border-gray-100 text-center shadow-sm'>
                    <h3 className='text-2xl font-bold text-gray-600'>{friend.days_since_contact}</h3>
                    <p className=' font-bold text-[10px] text-gray-400 uppercase tracking-wider mt-2' >Days Since Contact</p>

                </div>
                <div className='bg-white p-6 rounded-[20px] border border-gray-100 text-center shadow-sm'>
                    <h3 className='text-2xl font-bold text-gray-600'>30</h3>
                    <p className=' font-bold text-[10px] text-gray-400 uppercase tracking-wider mt-2'>Goal (Days)</p>

                </div>
                <div className='bg-white p-6 rounded-[20px] border border-gray-100 text-center shadow-sm'>
                    <h3 className='text-2xl font-bold text-gray-600'>Feb 27, 2026 </h3>
                    <p className=' font-bold text-[10px] text-gray-400 uppercase tracking-wider mt-2'>Next Due</p>

                </div>
            </div>
            {/* Relationship box */}
             <div className='bg-white p-6 rounded-[20px] border border-gray-100  shadow-sm flex justify-between items-center'>
            <div>
                <h4 className='font-bold text-gray-600 text-lg'>
                    Relationship Goal
                </h4>
                <p className='text-gray-500 text-sm mt-2 font-semibold'>Connect every<span className='text-black font-bold'> 30 days</span></p>
            </div>
            <div>
                <button className='bg-gray-200 py-1 px-2 rounded-sm shadow-sm hover:bg-gray-300'>Edit</button>
            </div>
           </div>
           <CheckInButton friendName={friend.name}/>
           </div>
           
          
         </div>
        </main>

       </div>
    );
};

export default AppDetailsPage;