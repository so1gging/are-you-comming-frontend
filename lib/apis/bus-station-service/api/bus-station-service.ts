import { useSwr } from '@/lib/apis/common/common'
import GetBusStationAroundIn from '@/lib/apis/bus-station-service/models/GetBusStationAroundIn'

export const useGetBusStationAroundOut = (params: GetBusStationAroundIn) =>
  useSwr<GetBusStationAroundIn>('/6410000/busstationservice/getBusStationAroundList', params)
