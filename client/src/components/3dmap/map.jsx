import {useState} from 'react'
import {APIProvider,Map,AdvancedMarker,Pin,InfoWindow} from '@vis.gl/react-google-maps'

const MAP = ({items}) => {
  const position = { lat: 30.330108, lng: 78.086127 }// {latitude: 30.330108, longitude: 30.330108}
  return (
    <APIProvider apiKey={import.meta.env.VITE_REACT_APP_MAP_URI}>
      <div className='maps' style={{height:"100vh"}}>
        <Map  zoom={11}
      center={ position }
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
     ></Map>
      </div>
    </APIProvider>
  )
}

export default MAP