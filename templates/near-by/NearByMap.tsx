'use client'
import React, { useEffect, useRef, useState } from 'react'
import useGeolocation from 'react-hook-geolocation'
import { useGetBusStationAroundListOut } from '@/lib/apis/bus-station-service/api/bus-station-service'
import Map from '@/components/Map/Map'

function NearByMap() {
  const [map, setMap] = useState<naver.maps.Map>()
  const [current, setCurrent] = useState<naver.maps.Marker>()
  const nearBys = useRef<naver.maps.Marker[]>()
  const [location, setLocation] = useState<{ lat: number; lng: number } | undefined>(undefined)
  const geolocation = useGeolocation()
  const { data } = useGetBusStationAroundListOut(
    { x: location?.lng || 0, y: location?.lat || 0 },
    location?.lng !== undefined && location?.lat !== undefined,
  )

  useEffect(() => {
    if (!map) return

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
  }, [map, geolocation.latitude])

  useEffect(() => {
    const { naver } = window

    if (!map) return
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
  }, [map, data])

  return <Map setMap={setMap} className="w-full h-300" />
}

export default NearByMap
