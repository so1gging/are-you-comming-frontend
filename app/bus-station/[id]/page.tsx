'use client'
import ContentLayout from '@/components/Layout/ContentLayout'
import useGetBusArrivalListOut from '@/lib/apis/bus-arrival-service/api/bus-arrival-service'

export default function Page({ params }: { params: { id: string } }) {
  const { data } = useGetBusArrivalListOut({ stationId: params.id })

  return <ContentLayout backgroundColor="white">{params.id}</ContentLayout>
}
