"use client"
import { useTimeline } from '@/context/TimelineContext';
import React from 'react';


import { Pie, PieChart,Legend, Tooltip } from 'recharts';


const StatePage = () => {
    const {events} = useTimeline();
    const callCount = events.filter(e => e.type === 'Call').length;
     const textCount = events.filter(e => e.type === 'Text').length;
      const videoCount = events.filter(e => e.type === 'Video').length;

    const data = [
  { name: 'Call', value: callCount, fill: '#355E3B' },
  { name: 'Text', value: textCount, fill: ' #5D3FD3' },
  { name: 'Video', value: videoCount, fill: '	#228B22' },
  
].filter(item=> item.value>0);
    return (
        <div className=' my-10 shadow-p-10 rounded-md container mx-auto border border-slate-300'>
            <h2 className='text-3xl font-bold text-[#355E3B] text-center mb-5'>By Interaction Type</h2>
{events.length===0 ?(
<div className='text-center py-20 text-gray-500'>
                <p className='text-sm'>No Interactions logged yet</p>
            </div>
) :(<PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh',margin:"auto",aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
       
      />
      <Legend/>
      <Tooltip/>
    </PieChart>)}
            


           
        </div>
    );
};

export default StatePage;