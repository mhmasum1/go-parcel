import React, { useState } from 'react';
import products from '../../jsFile/works';

const Works = () => {
    const [cart, setCart] = useState(products)
    return (
        <div className=' text-2xl font-bold'><h3>How it Works</h3>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
                {
                    cart.map(item => (
                        <div key={item.id}
                            className=' border p-5 rounded-xl shadow-sm '
                        >
                            <img src={item.image} alt="" />
                            <p className='font-bold text-xl pt-2 pb-2 '>{item.title}</p>
                            <p className='text-xs text-primary '>{item.description}</p>

                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Works;