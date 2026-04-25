import React from 'react';
import {Phone,Video,MessageSquareText } from 'lucide-react'
const TimelineIcon = ({type}) => {
    if(type==='Call')
    {
        return <Phone size={25} className='text-gray-900'/>
    }
    else if(type==='Text')
    {
        return <MessageSquareText size={25} className='text-gray-900'/>
    }
     else if(type==="Video")
    {
        return <Video size={25} className='text-gray-900'/>
    }
   
};

export default TimelineIcon;