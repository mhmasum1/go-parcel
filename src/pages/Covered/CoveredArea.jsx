import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const CoveredArea = () => {
  const [areas,setAreas]=useState([])

    const position = [23.8103, 90.4125]

useEffect(()=>{
  fetch('CentersArea.json')
  .then(res =>res.json())
  .then(data=>setAreas(data))
},[])


  return (
<div>
  <div className='text-center'>
    <h3 className='font-bold text-3xl my-10'>We are available in 64 districts</h3>
  </div>

   <div>
      <MapContainer className='h-[1100px]' center={position} zoom={8} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
      areas.map((area,index)=>(
        <Marker key={index} position={[area.latitude,area.longitude]}>
      <Popup>
        {area.district}
      </Popup>
    </Marker>
      ))
    }
  </MapContainer>
    </div>
</div>

   
  )
}

export default CoveredArea;