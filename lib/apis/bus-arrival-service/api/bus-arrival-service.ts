import { useSwr } from '@/lib/apis/common/common'
import GetBusArrivalListIn from '@/lib/apis/bus-arrival-service/models/GetBusArrivalListIn'
import GetBusArrivalListOut from '@/lib/apis/bus-arrival-service/models/GetBusArrivalListOut'

const useGetBusArrivalListOut = (params: GetBusArrivalListIn, enabled: boolean = true) => {
  const response = useSwr<GetBusArrivalListIn>(enabled ? '/6410000/busarrivalservice/getBusArrivalList' : null, params)

  const models: GetBusArrivalListOut[] = []
  if (response.data) {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(response.data, 'text/xml')
    const busStationAroundList = xmlDoc.getElementsByTagName('busArrivalList')

    for (let i = 0; i < busStationAroundList.length; i++) {
      const item = busStationAroundList[i]
      models.push({
        stationId: item.getElementsByTagName('stationId')[0].innerHTML,
        routeId: item.getElementsByTagName('routeId')[0].innerHTML,
        locationNo1: Number(item.getElementsByTagName('locationNo1')[0].innerHTML),
        predictTime1: Number(item.getElementsByTagName('predictTime1')[0].innerHTML),
        lowPlate1: item.getElementsByTagName('lowPlate1')[0].innerHTML,
        plateNo1: item.getElementsByTagName('plateNo1')[0].innerHTML,
        remainSeatCnt1: Number(item.getElementsByTagName('remainSeatCnt1')[0].innerHTML),
        locationNo2: Number(item.getElementsByTagName('locationNo2')[0].innerHTML),
        predictTime2: Number(item.getElementsByTagName('predictTime2')[0].innerHTML),
        lowPlate2: item.getElementsByTagName('lowPlate2')[0].innerHTML,
        plateNo2: item.getElementsByTagName('plateNo2')[0].innerHTML,
        remainSeatCnt2: Number(item.getElementsByTagName('remainSeatCnt2')[0].innerHTML),
        staOrder: Number(item.getElementsByTagName('staOrder')[0].innerHTML),
        flag: item.getElementsByTagName('flag')[0].innerHTML,
      })
    }
  }

  return { ...response, data: models }
}

export default useGetBusArrivalListOut
