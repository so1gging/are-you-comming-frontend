import { useSwr } from '@/lib/apis/common/common'
import GetBusStationAroundListIn from '@/lib/apis/bus-station-service/models/GetBusStationAroundListIn'

export const useGetBusStationAroundListOut = (params: GetBusStationAroundListIn, enabled?: boolean) =>
  useSwr<GetBusStationAroundListIn>(enabled ? '/6410000/busstationservice/getBusStationAroundList' : null, params)
