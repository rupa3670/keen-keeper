"use client";
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

const Home=()=>
 {
  const [friends, setFriends] = useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) =>{ setFriends(data);
      setLoading(false);
      },2000)
  }, []);
  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === "on-track").length;
  const needAttention = friends.filter(f => f.status === "overdue" || f.status === "almost due").length;
  return (
    <>
    <div className='min-h-screen bg-gray-50 pb-10'>
        <div className="flex flex-col justify-center items-center text-center pt-10  md:pt-16 px-4 mb-7">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Friends to keep close in your life </h2>
        <p className="text-gray-500 mt-4 mb-6 ">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
          relationships that matter most.</p>
        <button className="btn bg-[#244D3F] text-white">  <Plus size={18} />Add Friend</button>
      </div>
      <div className='max-w-6xl mx-auto px-4 md:px-10   grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4   mb-7 text-xl font-bold text-[#244D3F] '>
        <div className='flex flex-col justify-center items-center text-center  bg-white shadow-sm rounded rounded-[8px] py-4 md:py-8'>
          <h2>{totalFriends}</h2>
          <p className='text-sm font-semibold text-gray-500 '>Total Friends</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center  bg-white shadow-sm rounded rounded-[8px] py-4 md:py-8'>
          <h2>{onTrack}</h2>
          <p className='text-sm font-semibold text-gray-500'>On Track</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center  bg-white shadow-sm rounded rounded-[8px] py-4 md:py-8'>
          <h2>{needAttention}</h2>
          <p className='text-sm font-semibold text-gray-500'>Need Attention</p>
        </div>
        <div className='flex flex-col justify-center items-center text-center  bg-white shadow-sm rounded rounded-[8px] py-4 md:py-8'>
          <h2>12</h2>
          <p className='text-sm font-semibold text-gray-500'>Interactions This Month</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 md:px-10 lg:px-20 border-t border-gray-300  pt-10 '>
        <h3 className='text-2xl fond-bold mb-6'>Your Friends</h3>
        {loading?(
          <div className='flex justify-center items-center py-20'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ):(
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {friends.map((friend) =>(
            <Link href={`/${friend.id}`} key={friend.id}>
            <div  className="bg-white shadow-sm border border-gray-100 rounded-[20px] p-6 flex flex-col items-center">
             
                <div className='mb-4'> <img
                  src={friend.picture}
                  alt={friend.name}
                  className="rounded-full w-20 h-20 object-cover " /></div>
             
              <div className="flex flex-col items-center text-center w-full">
                <h2 className="text-lg font-bold text-gray-800 ">{friend.name}</h2>
                <p className='text-gray-500 text-sm mb-3'>{friend.days_since_contact}d ago</p>
                <div className='flex flex-wrap justify-center gap-2 mb-3'>
                  {friend.tags.map(tag => (
                    <span key={tag} className='px-3 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700'>{tag}</span>
                  ))}
                </div>
                <div className={`w-full py-2 rounded-full text-[11px] font-bold text-center text-white ${friend.status==='overdue' ? 'bg-red-400' : friend.status==='almost due' ?'bg-orange-400':'bg-green-400'}`}>
                  {friend.status.toUpperCase()}

                </div>
              </div>
            </div>
            </Link>
         ) )};
        </div>
        )}
      </div>
    </div>





    </>
  );
 };
 export default Home;
