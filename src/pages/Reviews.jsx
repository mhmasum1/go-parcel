import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCart from './ReviewCart';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);
    // console.log(reviews)
    return (
        <div>
            <div className='text-center my-10'>
                <h3 className='font-bold text-2xl'>What our customers are sayings</h3>
                <p className='text-primary'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
            loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                 autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
            
                modules={[Autoplay,EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => (
                        <SwiperSlide 
                        key={review.id}
                        >
                            <ReviewCart review={review}></ReviewCart>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Reviews;