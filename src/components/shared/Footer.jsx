import React from 'react';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <footer className=" flex flex-col justify-center items-center text-center  text-white rounded md:p-10 p-6 ">
                <h2 className='text-5xl font-bold'>KeenKeeper</h2>
                <p className='text-gray-300 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                <div className='mt-5'>
                    <p className='font-semibold'>Social Link</p>
                    <div className='flex justify-center items-center gap-3 mt-3'>
                        <Image src="/instagram.png" alt="instagram" width={30} height={30} />
                        <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
                        <Image src="/twitter.png" alt="twitter" width={30} height={30} />
                    </div>
                </div>
                <div className=' w-full border-t border-gray-500 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-300'>
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                    <div className='flex gap-6'>
                        <p>Privacy Policy</p>
                        <p> Terms of Service</p>
                        <p>Cookies</p>
                    </div>

                </div>

            </footer>
        </div>
    );
};

export default Footer;