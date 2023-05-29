'use client'
import React, { useEffect, useRef, useState } from 'react'
import useGeolocation from 'react-hook-geolocation'

const Map = () => {
  const [map, setMap] = useState<naver.maps.Map>()
  const [current, setCurrent] = useState<naver.maps.Marker>()
  const mapElement = useRef(null)
  const geolocation = useGeolocation()

  useEffect(() => {
    if (!geolocation.error) {
      const currentLocation = {
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      }

      const marker = new naver.maps.Marker({
        position: currentLocation,
        map,
      })

      map?.morph(currentLocation)
      setCurrent(marker)
    }
    return () => {
      current?.setMap(null)
    }
  }, [geolocation])

  useEffect(() => {
    const { naver } = window
    if (!mapElement.current || !naver) return

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.5656, 126.9769)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: false,
    }
    const map = new naver.maps.Map(mapElement.current, mapOptions)
    setMap(map)

    return () => {
      current?.setMap(null)
    }
  }, [])

  return <div ref={mapElement} id="map" className="w-full h-300" />
}

export default Map
