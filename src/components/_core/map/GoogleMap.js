import React from 'react'
import GoogleMapReact from 'google-map-react'
import './google-map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = ({ googleMapKey = '' }) => {
    return (
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: googleMapKey,
                }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33,
                }}
                defaultZoom={11}>
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default GoogleMap
