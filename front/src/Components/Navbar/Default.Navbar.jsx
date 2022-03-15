import React from 'react';

// iCONS
import { BsFillLockFill } from 'react-icons/bs';
import { FaHeartbeat } from 'react-icons/fa';


const Mobile = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-blue-200 py-3 px-3'>
                <div className='flex items-center gap-3 '>
                    <FaHeartbeat className='w-10 h-10 text-red-500' />
                    <h1 className='text-lg font-semibold'>PARK CAPSULE</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <BsFillLockFill className='text-blue-700 w-6 h-6' />
                    <h4 className='text-blue-700 font-bold text-lg'>Login</h4>
                </div>
            </div>
        </>
    );
};

const Medium = () => {
    return (
        <>
            <div className=' md:container md:py-4 md:px-6 md:flex md:items-center md:justify-between   bg-blue-200'>
                <div className='md:flex md:items-center md:gap-4'>
                    <div className=''>
                        <FaHeartbeat className='w-10 h-10 text-red-500' />
                    </div>
                    <h1 className='md:text-xl md:font-bold'>PARK CAPSULE</h1>
                </div>
                <div >
                    <ul className=' md:container  md:flex md:items-center md:gap-6  text-md'>
                        <li className='font-medium	'>Home </li>
                        <li className='font-medium	'>Features </li>
                        <li className='font-medium	'>About us </li>
                        <li className='font-medium	'>Contact us </li>
                    </ul>
                </div>


                <div className='md:flex md:items-center md:gap-2'>
                    <BsFillLockFill className='text-blue-700 w-6 h-6' />
                    <h4 className='text-blue-700 font-bold text-lg'>Login</h4>
                </div>
            </div>
        </>
    )
}
const Mainscreen = () => {
    return (
        <>
            <div className=' lg:container lg:py-4 lg:px-24 lg:flex lg:items-center lg:justify-between   bg-blue-200'>
                <div className='lg:flex lg:items-center lg:gap-4'>
                    <div className=''>
                        <FaHeartbeat className='w-12 h-12 text-red-500' />
                    </div>
                    <h1 className='lg:text-2xl lg:font-extrabold'>PARK CAPSULE</h1>
                </div>
                <div >
                    <ul className=' lg:container  lg:flex lg:items-center lg:gap-20  text-lg'>
                        <li className='font-medium	'>Home </li>
                        <li className='font-medium	'>Features </li>
                        <li className='font-medium	'>About us </li>
                        <li className='font-medium	'>Contact us </li>
                    </ul>
                </div>


                <div className='lg:flex lg:items-center lg:gap-4'>
                    <BsFillLockFill className='text-blue-700 w-8 h-8' />
                    <h4 className='text-blue-700 font-bold text-lg'>Login</h4>
                </div>
            </div>

        </>
    );
};
const DefaultNavbar = () => {
    return (
        <>
            <nav className='bg-navbarbg-900' >

                <div className='hidden lg:flex'>
                    <Mainscreen />
                </div>
                <div className='hidden md:flex lg:hidden'>
                    <Medium />
                </div>
                <div className=' md:hidden'>
                    <Mobile />
                </div>
            </nav>
        </>
    )
}

export default DefaultNavbar;