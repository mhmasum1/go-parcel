import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CoveredArea = () => {
  const [areas, setAreas] = useState([]);

  const position = [23.8103, 90.4125];
  const mapRef = useRef(null);

  useEffect(() => {
    fetch('CentersArea.json')
      .then((res) => res.json())
      .then((data) => setAreas(data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;

    const district = areas.find((a) =>
      a.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude]
      console.log(district, coord)
      mapRef.current.flyTo(coord, 14);
    }

  };

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="font-bold text-3xl my-10">We are available in 64 districts</h3>
        <p>We deliver almost all over Bangladesh</p>
      </div>

      <form onSubmit={handleSearch}>
        <label className="input validator">
          <input
            type="text"
            required
            placeholder="Type District"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minLength="3"
            maxLength="30"
            title="Only letters, numbers or dash"
            name="location"
          />
        </label>
        <br />
        <button type="submit" className="btn btn-primary mt-3">
          Search
        </button>
      </form>

      <div className='mt-5'>
        <MapContainer
          className="h-[1100px]"
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {areas.map((area, index) => (
            <Marker key={index} position={[area.latitude, area.longitude]}>
              <Popup>{area.district}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoveredArea;
