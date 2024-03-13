'use client'
import React, { useEffect } from 'react'
import {Loader} from "@googlemaps/js-api-loader"
const Map = () => {
    const mapRef = React.useRef(null);
    useEffect(() =>{
        const initmap  = async () => {
            const loader = new Loader({
                apiKey: 'AIzaSyC83f1yZMlXNoYExxgDLougo4_LSAS-pGo',
                version: "weekly",
            });
            const {Map} = await loader.importLibrary('maps');
            const position = {
                lat: 27.7172,
                long: 85.3240
            }
            if (mapRef.current) {
                const map = new Map(mapRef.current,{
                    center: {
                        lat: position.lat,
                        lng: position.long
                    },
                    zoom: 17,
                    mapId: "e3e3e3e3e3e3e3e3",
                });
            }
        }
        initmap()
    },[])
  return (
    <div>
        <div ref={mapRef} style={{height: "50vh", width: "100%"}}></div>
    </div>
  )
}

export default Map