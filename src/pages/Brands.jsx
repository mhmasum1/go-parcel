import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';


import amazon from '../assets/brands/amazon.png'
import amazonVector from '../assets/brands/amazon_vector.png'
import casio from '../assets/brands/casio.png'
import moonstar from '../assets/brands/moonstar.png'
import randstad from '../assets/brands/randstad.png'
import star from '../assets/brands/star.png'
import start_people from '../assets/brands/start_people.png'

const brands = [amazon, amazonVector, casio, moonstar, randstad, star, start_people]
const Brands = () => {
    return (
        <div className='p-10'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
                loop={true}
                className='pb-20'

            >
                {
                    brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <img src={brand} alt="" />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    );
};

export default Brands;