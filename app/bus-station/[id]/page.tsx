'use client'
import ContentLayout from '@/components/Layout/ContentLayout'
import useGetBusArrivalListOut from '@/lib/apis/bus-arrival-service/api/bus-arrival-service'
import ArrivalListItem from '@/templates/bus-station/ArrivalListItem'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetBusArrivalListOut({ stationId: params.id })

  return (
    <ContentLayout backgroundColor="white">
      <div className="flex justify-center">
        <span className="text-h1">정류장 상세</span>
      </div>
      {data.map((item, index) => (
        <ArrivalListItem key={`bus-station-${params.id}-${index}`} item={item} />
      ))}
    </ContentLayout>
  )
}
