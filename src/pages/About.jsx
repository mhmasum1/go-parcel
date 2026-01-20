import React from 'react'
import parcelPic from '../assets/live-tracking.png'

function About() {
  return (
    <div className='flex gap-5 justify-between items-center  h-48 p-5 '>

      <div>
        <img src={parcelPic} alt="" />
      </div>
      <div className="border-l-4 border-dotted border-gray-400 h-32"></div>
      <div>
        <h3 className='font-bold text-2xl '>Live Parcel Tracking </h3>
        <p className='text-primary  '> Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
      </div>
    </div>
  )
}

export default About