"use client"
import React from 'react';

import Link from 'next/link';
import {Phone,Video,MessageSquareText } from 'lucide-react'
import { useTimeline } from '@/context/TimelineContext';
import {ToastContainer, toast } from 'react-toastify';
const CheckInButton = ({friendName}) => {
    const {addEvents}=useTimeline();

    const handleAction =(type) =>{
        addEvents(type,friendName);
        toast.success(`${type} with ${friendName} logged!`);
    };
    return (
        <>
        {/* check in button */}
           <div className='bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm'>
            <h4 className='font-bold text-green-800 mb-4 text-xl'>Quick Check-In</h4>
            <div className='grid grid-cols-3 gap-4'>

                <button onClick={()=>handleAction("Call")} className='flex flex-col items-center justify-center gap-4 py-8 bg-gray-100 rounded-2xl hover:bg-gray-100'>
                    <Phone className='text-gray-900' size={25}/>
                    <span className='text-xs font-bold text-gray-700 tracking-wide'>Call</span>
                </button>
                <button  onClick={()=>handleAction("Text")} className='flex flex-col items-center justify-center gap-4 py-8 bg-gray-100 rounded-2xl hover:bg-gray-100'>
                    <MessageSquareText className='text-gray-900' size={25}/>
                    <span className='text-xs font-bold text-gray-700  tracking-wide'>Text</span>
                </button>
                 <button  onClick={()=>handleAction("Video")}className='flex flex-col items-center justify-center gap-4 py-8 bg-gray-100 rounded-2xl hover:bg-gray-100'>
                    <Video className='text-gray-900' size={25}/>
                    <span className='text-xs font-bold text-gray-700  tracking-wide'>Video</span>
                </button>
               
            </div>
           </div>
           </>
    );
};

export default CheckInButton ;