'use client'
import ContentLayout from '@/components/Layout/ContentLayout'
import NearByMap from '@/templates/near-by/NearByMap'
import { useGetBusStationAroundListOut } from '@/lib/apis/bus-station-service/api/bus-station-service'
import useGeolocation from 'react-hook-geolocation'
import RoundWrap from '@/components/Wrap/RoundWrap'
import MenuItem from '@/components/Menu/MenuItem'
import NearByGuide from '@/templates/near-by/NearByGuide'

export default function Page() {
  const { latitude, longitude } = useGeolocation()
  const isGeolocation = latitude !== null && longitude !== null
  const { data } = useGetBusStationAroundListOut({ x: longitude, y: latitude }, isGeolocation)
  const isData = data?.length > 0

  return (
    <ContentLayout backgroundColor="bg01">
      <NearByGuide isData={isData} />
      <NearByMap data={data} currentPosition={{ lat: latitude, lng: longitude }} />
      <RoundWrap className="h-80 overflow-y-scroll">
        {data.map((item) => (
          <MenuItem key={`near-by-menu-item-${item.stationId}`} href={''} text={item.stationName} />
        ))}
      </RoundWrap>
    </ContentLayout>
  )
}
