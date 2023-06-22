'use client'
import React, { useEffect, useRef, useState } from 'react'
import Map from '@/components/Map/Map'
import GetBusStationAroundListOut from '@/lib/apis/bus-station-service/models/GetBusStationAroundListOut'

interface NearByMapProps {
  data: GetBusStationAroundListOut[]
  currentPosition: { lat: number; lng: number }
}
function NearByMap({ data, currentPosition }: NearByMapProps) {
  const [map, setMap] = useState<naver.maps.Map>()
  const [current, setCurrent] = useState<naver.maps.Marker>()
  const nearBys = useRef<naver.maps.Marker[]>()

  useEffect(() => {
    if (!map) return

    const marker = new naver.maps.Marker({
      position: currentPosition,
      map,
    })

    map?.morph(currentPosition)
    setCurrent(marker)

    return () => {
      current?.setMap(null)
    }
  }, [map, currentPosition])

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
