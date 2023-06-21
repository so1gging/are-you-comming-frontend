'use client'
import React, { useEffect, useRef, useState } from 'react'
import useGeolocation from 'react-hook-geolocation'
import { useGetBusStationAroundListOut } from '@/lib/apis/bus-station-service/api/bus-station-service'

const Map = () => {
  const [map, setMap] = useState<naver.maps.Map>()
  const [current, setCurrent] = useState<naver.maps.Marker>()
  const nearBys = useRef<naver.maps.Marker[]>()
  const [location, setLocation] = useState<{ lat: number; lng: number } | undefined>(undefined)
  const mapElement = useRef(null)
  const geolocation = useGeolocation()
  const { data } = useGetBusStationAroundListOut(
    { x: location?.lng || 0, y: location?.lat || 0 },
    location?.lng !== undefined && location?.lat !== undefined,
  )

  useEffect(() => {
    if (geolocation.latitude & geolocation.longitude) {
      const currentLocation = {
        lat: geolocation.latitude,
        lng: geolocation.longitude,
      }
      setLocation(currentLocation)

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
  }, [geolocation.latitude])

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

  useEffect(() => {
    const { naver } = window
    if (!mapElement.current || !naver) return

    const markers = data?.map(
      (item) =>
        new naver.maps.Marker({
          map: map,
          position: new naver.maps.LatLng(item.y, item.x),
        }),
    )

    nearBys.current = markers
    return () => {
      nearBys.current?.forEach((marker) => marker.setMap(null))
    }
  }, [data])

  return <div ref={mapElement} id="map" className="w-full h-300" />
}

export default Map
