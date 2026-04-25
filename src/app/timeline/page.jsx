"use client"
import { useTimeline } from '@/context/TimelineContext';
import React, { useState } from 'react';
import TimelineIcon from './TimelineIcon';




const TimelinePage = () => {
    const {events}=useTimeline();
    // const[filter,setFilter]=useState("All");
    // const filteredEvents = events.filter(event=>{
    //     if(filter==="All") return true;
    //     return event.type===filter;
    // })
    
    return (
      <div className='min-h-screen bg-gray-100 py-12 px-4' >
        <div className='max-w-3xl mx-auto'>
           
             <h1 className=' text-2xl md:text-4xl font-bold text-gray-900 mb-5'>TimeLine</h1>
            <button className='text-sm border border-gray-200 shadow-sm py-2 px-8 rounded-sm font-medium flex text-gray-500 mb-5'>Filter Timeline</button>
           
            {/* <div className='mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4  bg-white rounded-[5px] p-6 shadow-sm border-gray-100 min-h-14 '> */}
                
            
            <div className='flex flex-col gap-4'>
                {events.length=== 0 ? (
                    <div className='text-center py-20 text-gray-400 bg-white  rounded-[5px]  shadow-sm  '>
                    <p>No interections logged yet</p>
                </div>

                ):(
                    events.map((event)=>(
                        <div key={event.id} className='flex items-start gap-5 py-4 px-4 border-b border-gray-50 bg-white rounded-[5px] '>
                            <div className='mt-1 flex-shrink-0'><TimelineIcon type={event.type}/>
                            </div>
                            <div>
                               <h3 className='text-[16px] font-bold text-green-900'>{event.type} <span className='font-normal text-gray-500 '> with {event.name} </span></h3>
                               <span className='text-[12px] font-bold text-gray-500  mt-1'>{event.date}</span>
                            </div>
                        </div>
                    ))
                )}
            </div>


        </div>
      </div>
    );
};

export default TimelinePage;