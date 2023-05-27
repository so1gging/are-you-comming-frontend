import { useSwr } from '@/lib/apis/common/common'
import GetBusStationAroundListIn from '@/lib/apis/bus-station-service/models/GetBusStationAroundListIn'

export const useGetBusStationAroundListOut = (params: GetBusStationAroundListIn) =>
  useSwr<GetBusStationAroundListIn>('/6410000/busstationservice/getBusStationAroundList', params)
