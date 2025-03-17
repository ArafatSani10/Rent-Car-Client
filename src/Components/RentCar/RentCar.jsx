import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from './CarCard';

const RentCar = () => {

    const cars = useLoaderData();
    console.log(cars);
    return (
        <div className='mb-10'>
             <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-5">
                    <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
                    <div className="uppercase text-4xl font-Bebas text-center">
                        <h1>CAR</h1>
                    </div>
                    <div className="w-28 h-1 bg-[#000000] lg:mx-0"></div>
                </div>
            </div>

            {/* Main Title */}
            <div className="font-Bebas text-center text-5xl mt-3 md:text-[63px]">
                <h1>GET YOUR <span className="text-blue-600">CAR FOR RENT</span></h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default RentCar;