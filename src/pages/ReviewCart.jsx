import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCart = ({ review }) => {
    const { userName } = review;
    return (
        <div className="min-h-screen from-slate-100 to-slate-200 flex items-center justify-center p-6">
            <div className="card w-full max-w-lg bg-white shadow-2xl">
                <div className="card-body p-8">
                    {/* Quote Icon */}
                    <div className="mb-4">
                        <FaQuoteLeft className="text-5xl text-teal-700 opacity-30" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-lg text-slate-700 leading-relaxed mb-8">
                        A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.
                    </p>

                    {/* Divider */}
                    <div className="divider my-0"></div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mt-6">
                        <div className="avatar">
                            <div className="w-14 h-14 rounded-full from-teal-700 to-teal-900"></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-slate-900">{userName}</h3>
                            <p className="text-slate-500">Senior Product Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;