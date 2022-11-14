import React from 'react'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import GpsMarker from "../../assets/icon/GpsMarker.svg"
const containerStyle = {
  width: "100%",
  height: '230px',
  borderRadius: "0px 0px 8px 8px"
};

export function Map({center}) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCbIEwE4xnJA3op8yk2jwcghV7yNmN_Kes",
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
    >
      <MarkerF
        position={center}
        icon={GpsMarker}/>
    </GoogleMap>
  ) : <></>
}
