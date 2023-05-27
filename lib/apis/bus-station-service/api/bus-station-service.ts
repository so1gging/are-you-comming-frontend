import { useSwr } from '@/lib/apis/common/common'
import GetBusStationAroundIn from '@/lib/apis/bus-station-service/models/GetBusStationAroundIn'
import GetBusStationAroundOut from '@/lib/apis/bus-station-service/models/GetBusStationAroundOut'

export const useGetBusStationAroundOut = (params: GetBusStationAroundIn) =>
  useSwr<GetBusStationAroundOut, GetBusStationAroundIn>('/6410000/busstationservice/getBusStationAroundList', params)
