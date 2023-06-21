import { useSwr } from '@/lib/apis/common/common'
import GetBusStationAroundListIn from '@/lib/apis/bus-station-service/models/GetBusStationAroundListIn'
import GetBusStationAroundListOut from '@/lib/apis/bus-station-service/models/GetBusStationAroundListOut'
export const useGetBusStationAroundListOut = (params: GetBusStationAroundListIn, enabled?: boolean) => {
  const response = useSwr<GetBusStationAroundListIn>(
    enabled ? '/6410000/busstationservice/getBusStationAroundList' : null,
    params,
  )

  const models: GetBusStationAroundListOut[] = []
  if (response.data) {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(response.data, 'text/xml')
    const busStationAroundList = xmlDoc.getElementsByTagName('busStationAroundList')

    for (let i = 0; i < busStationAroundList.length; i++) {
      const item = busStationAroundList[i]
      models.push({
        stationId: item.getElementsByTagName('stationId')[0].innerHTML,
        stationName: item.getElementsByTagName('stationName')[0].innerHTML,
        mobileNo: item.getElementsByTagName('mobileNo')[0].innerHTML,
        regionName: item.getElementsByTagName('regionName')[0].innerHTML,
        districtCd: item.getElementsByTagName('districtCd')[0].innerHTML,
        centerYn: item.getElementsByTagName('centerYn')[0].innerHTML,
        x: Number(item.getElementsByTagName('x')[0].innerHTML),
        y: Number(item.getElementsByTagName('y')[0].innerHTML),
      })
    }
  }

  return { ...response, data: models }
}
