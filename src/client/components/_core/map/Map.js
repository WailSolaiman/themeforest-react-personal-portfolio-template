import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import './map.scss'

const Map = withGoogleMap(() => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
))

export default Map