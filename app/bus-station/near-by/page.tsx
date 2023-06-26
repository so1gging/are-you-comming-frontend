'use client'
import ContentLayout from '@/components/Layout/ContentLayout'
import Guide from '@/components/Guide/Guide'
import ThinkingFace from '@/assets/image/thinking-face.gif'
import NearByMap from '@/templates/near-by/NearByMap'
import { useGetBusStationAroundListOut } from '@/lib/apis/bus-station-service/api/bus-station-service'
import useGeolocation from 'react-hook-geolocation'
import RoundWrap from '@/components/Wrap/RoundWrap'
import MenuItem from '@/components/Menu/MenuItem'

export default function Page() {
  const { latitude, longitude } = useGeolocation()
  const { data } = useGetBusStationAroundListOut({ x: longitude, y: latitude }, latitude !== null && longitude !== null)

  return (
    <ContentLayout backgroundColor="bg01">
      <Guide src={ThinkingFace} alt={'think-face'}>
        {data ? (
          <>
            주변 버스정류장을
            <br />
            보여드릴게요 !
          </>
        ) : (
          <>
            주변에 버스정류장이
            <br />
            보이지 않네요.
          </>
        )}
      </Guide>
      <NearByMap data={data} currentPosition={{ lat: latitude, lng: longitude }} />
      <RoundWrap className="h-80 overflow-y-scroll">
        {data.map((item) => (
          <MenuItem key={`near-by-menu-item-${item.stationId}`} href={''} text={item.stationName} />
        ))}
      </RoundWrap>
    </ContentLayout>
  )
}
