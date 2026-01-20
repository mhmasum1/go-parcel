import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCart = ({ review }) => {
    const { userName,review: testimonial,delivery_email,user_photoURL} = review;
    return (
        <div className="flex items-center justify-center p-6">
            <div className=" bg-white shadow-2xl">
                <div className="p-8">
                    {/* Quote Icon */}
                    <div className="mb-4">
                        <FaQuoteLeft className="text-5xl" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg mb-8"> {testimonial} </p>

                    {/* Divider */}
                    <div className="divider my-0"></div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mt-6">
                        <div className="avatar">
                            <div className="w-14 h-14 rounded-2xl">
                                <img src={user_photoURL} alt="" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">{userName}</h3>
                            <p className="text-xs">{delivery_email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;