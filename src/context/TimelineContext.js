"use client";
import React, { createContext,  useEffect, useState,useContext } from 'react';

const TimelineContext = createContext() ;
export const TimelineProvider = ({children})=>{
    const [events, setEvents]=useState([]);

    useEffect(()=>{
        const saved=localStorage.getItem("keenKeeperEvents");
        if(saved) setEvents(JSON.parse(saved));
    },[]);

    useEffect(()=>{
             {
            localStorage.setItem("keenKeeperEvents",JSON.stringify(events));
        }
    },[events]);


    const addEvents = (type,friendName)=>{
        const newEvents={
            id: Date.now(),
            type,
            name: friendName,
            date: new Date().toLocaleDateString('en-US',{
                month:'long', day:'numeric', year:'numeric'
            })
        };
       setEvents((preEvents)=>[newEvents, ...preEvents])
    };
     return(
            <TimelineContext.Provider value={{events,addEvents}}>
                {children}
            </TimelineContext.Provider>
        )

}
export const useTimeline =() => useContext(TimelineContext)