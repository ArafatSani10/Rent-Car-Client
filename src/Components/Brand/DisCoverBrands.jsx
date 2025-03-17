import React from 'react';

const DisCoverBrands = () => {
    return (
        <div className='w-full mx-auto my-6 px-4 sm:px-6 lg:px-8'>
            {/* Heading Section */}
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className='flex items-center gap-5'>
                    <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
                    <div className='uppercase text-4xl font-Bebas text-center'>
                        <h1>Brands</h1>
                    </div>
                    <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
                </div>
            </div>
            <div className='font-Bebas text-center text-5xl mt-3 md:text-[63px]'>
                <h1>DISCOVER BY <span className='text-blue-600'> BRANDS</span></h1>
            </div>

            {/* Marquee Section */}
            <div className='overflow-hidden whitespace-nowrap my-8 py-4'>
                <div className='inline-block animate-marquee'>
                    {/* First Set of Images */}
                    <div className='inline-flex space-x-16'>
                        <img src="https://i.ibb.co.com/8Lc3Dg2F/kisspng-geneva-motor-show-lexus-car-toyota-mercedes-benz-kia-5ab5311dcb4062-4500927115218240298325-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/nNtzyB1H/MB-star-n-web-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/TG7NCBd/honda-logo-png-picture-20-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/69Zy52J/image-27.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/V04c2KT8/image-31.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/MkQRtcQ5/pngwing-com-4-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/C534tNDS/pngwing-com-3-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/JW2RQn77/pngwing-com-2-1.png" alt="" className='h-16 w-auto' />
                    </div>
                    {/* Duplicate Set of Images for Seamless Loop */}
                    <div className='inline-flex space-x-16'>
                        <img src="https://i.ibb.co.com/8Lc3Dg2F/kisspng-geneva-motor-show-lexus-car-toyota-mercedes-benz-kia-5ab5311dcb4062-4500927115218240298325-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/nNtzyB1H/MB-star-n-web-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/TG7NCBd/honda-logo-png-picture-20-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/69Zy52J/image-27.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/V04c2KT8/image-31.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/MkQRtcQ5/pngwing-com-4-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/C534tNDS/pngwing-com-3-1.png" alt="" className='h-16 w-auto' />
                        <img src="https://i.ibb.co.com/JW2RQn77/pngwing-com-2-1.png" alt="" className='h-16 w-auto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisCoverBrands;