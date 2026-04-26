"use client"
import { useTimeline } from '@/context/TimelineContext';
import React, { useState } from 'react';
import TimelineIcon from './TimelineIcon';
import { ChevronDown } from 'lucide-react';


const Filters = ["All", "Call", "Text", "Video"];

const TimelinePage = () => {
    const { events } = useTimeline();

    const [filter, setFilter] = useState("All");
    const filteredEvents = filter === "All" ? events : events.filter(event => event.type === filter);

    return (
        <div className='min-h-screen bg-gray-100 py-12 px-4' >
            <div className='max-w-3xl mx-auto'>

                <h1 className=' text-2xl md:text-4xl font-bold text-gray-900 mb-5'>TimeLine</h1>

                {/* dropdown */}

                <div className="dropdown dropdown-bottom mb-5">
                    <div tabIndex={0} role="button" className="text-sm border border-gray-200 shadow-sm py-2 px-8 rounded-sm font-medium items-center gap-2 text-gray-500  cursor-pointer flex justify-between">{filter === "All"? "Filter Timeline": filter}<ChevronDown size={16}/></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                        {Filters.map((f)=>(
                            <li key={f}>
                                <button onClick={()=>setFilter(f)}
                                className={filter === f?'bg-[#24D#F] text-white':''}>{f}</button>
                                
                            </li>
                        )) }
                    </ul>
                </div>



                <div className='flex flex-col gap-4'>
                    {filteredEvents.length === 0 ? (
                        <div className='text-center py-20 text-gray-400 bg-white  rounded-[5px]  shadow-sm  '>
                            <p>No interactions logged yet</p>
                        </div>

                    ) : (
                        filteredEvents.map((event) => (
                            <div key={event.id} className='flex items-start gap-5 py-4 px-4 border-b border-gray-50 bg-white rounded-[5px] '>
                                <div className='mt-1 flex-shrink-0'><TimelineIcon type={event.type} />
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