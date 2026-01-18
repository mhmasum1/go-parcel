import React, { useState } from 'react';
import services from '../jsFile/services';

const Services = () => {
    const [cart, setCart] = useState(services);
    return (
        <div className='my-5 bg-[#067A87] p-10 rounded-2xl'>
            <div className='text-center my-5'>
                <h3 className='font-bold text-2xl text-white'>Our Services </h3>
                <p className='text-white'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    cart.map(item => (
                        <div key={item.id} className='border rounded-2xl text-center p-5 bg-white'>
                            <div className='flex justify-center'>
                                <img src={item.image} alt="" />
                            </div>
                            <h3 className='font-bold text-xl my-2'>{item.title}</h3>
                            <p className='text-primary text-xs'>{item.description}</p>

                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Services;