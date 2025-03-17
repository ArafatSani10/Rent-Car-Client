import React from 'react';

const DiscoverStyle = () => {
    return (
        <div className='w-full mx-auto my-6 px-4 sm:px-6 lg:px-8'>
        {/* Heading Section */}
        <div className='flex flex-col items-center justify-center gap-4'>
           <div className='flex items-center gap-5'>
           <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
            <div className='uppercase text-4xl font-Bebas text-center'>
                <h1>STYLES</h1>
            </div>
            <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
           </div>
        </div>
        <div className='font-Bebas text-center text-5xl mt-3 md:text-[63px]'>
            <h1>DISCOVER BY <span className='text-blue-600'> STYLES</span></h1>
        </div>

        {/* Marquee Section */}
        <div className='overflow-hidden whitespace-nowrap my-8 py-4'>
            <div className='inline-block animate-marquee'>
                {/* First Set of Images */}
                <div className='inline-flex space-x-16'>
                    <img src="https://i.ibb.co.com/nMh09DWd/image-17.png" alt="" className='h-16 w-auto' />

                    <img src="https://i.ibb.co.com/1SxXHMC/image-18.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/DDcqWR3x/image-19.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/tT48GS1f/image-20.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/Xx7nYH2t/pngimg-com-bmw-PNG99560-1.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/1JTMMKPL/pu7b6sa-1475175-removebg-preview-1.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/RThbGPH4/bmw-car-png-2093-1.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/jNTVdWJ/image-30.png" alt="" className='h-16 w-auto' />
                </div>
                {/* Duplicate Set of Images for Seamless Loop */}
                <div className='inline-flex space-x-16'>
                    <img src="https://i.ibb.co.com/nMh09DWd/image-17.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/1SxXHMC/image-18.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/DDcqWR3x/image-19.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/tT48GS1f/image-20.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/Xx7nYH2t/pngimg-com-bmw-PNG99560-1.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/1JTMMKPL/pu7b6sa-1475175-removebg-preview-1.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/RThbGPH4/bmw-car-png-2093-1.png" alt="" className='h-16 w-auto' />
                    <img src="https://i.ibb.co.com/jNTVdWJ/image-30.png" alt="" className='h-16 w-auto' />
                </div>
            </div>
        </div>
    </div>
    );
};

export default DiscoverStyle;