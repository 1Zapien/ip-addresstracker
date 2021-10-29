import React, { useState } from 'react';
import './App.css';

import L from 'leaflet';
import {
  MapContainer, TileLayer, Marker, Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  const [ipAddress, setIpAddress] = useState('');

  let updateIp = (event)=>{
    console.log(event.target.value);
    setIpAddress(event.target.value);
    console.log(ipAddress);
 
  }

  let submissionForm = (event)=> {
    event.preventDefault();
  }







  return (
    <main className="App">
      <div className="top__section">
        <div className="hero__header">
          <h1>IP Address Tracker</h1>
        </div>

        <form onSubmit={submissionForm}>
          <label htmlFor="firsInput" >
            <input id="firstInput" type="text" value={ipAddress} onChange={updateIp} placeholder="Search for any IP address or domain"  />
          </label>
          <input id="secondInput" type="submit" value=""/>
        </form>

        <div className="card__data">
          <div className="card__info">
            IP Address
          </div>
          <div className="card__info">
            Location
          </div>
          <div className="card__info">
            Timezone
          
            UTC {/* add offset value dynamically using the API*/}
          </div>
          <div className="card__info">
            ISP
          </div>
        </div>
      </div>

      <div id="mapId">
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
      </div>

    </main>
  );
}

export default App;
