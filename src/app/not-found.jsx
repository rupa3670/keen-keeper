import React from 'react';
import Link from 'next/link';
const NotFoundPage = () => {
    return (
        <div className='h-screen bg-purple-950 text-white flex flex-col justify-center items-center text-center'>
            <h2 className='text-7xl font-bold'>404</h2>
            <p className='text-3xl mt-5'>Oops! the page not found</p>
            <p className='text-sm mt-3'>The link you followed probably broken <br />or the page has been removed
            </p>
            <Link href={"/"}> <button className="btn mt-3 text-xl font-medium p-3 rounded-[8px] bg-white  text-black hover:bg-purple-200">Go Back Home</button></Link>
        </div>
    );
};

export default NotFoundPage;