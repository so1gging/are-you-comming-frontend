import GetBusArrivalListOut from '@/lib/apis/bus-arrival-service/models/GetBusArrivalListOut'
import Badge from '@/components/Badge'
import Heart from '@/components/Heart/Heart'
import ListItem from '@/components/List/ListItem'
import { BUS_LOW_PLATE } from '@/lib/utils/type'

interface Props {
  item: GetBusArrivalListOut
}
const ArrivalListItem = ({ item }: Props) => {
  return (
    <ListItem>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-1.5">
          <div className="flex">
            <Badge color={item.lowPlate1 === '0' ? 'blue' : 'red'} text={BUS_LOW_PLATE[item.lowPlate1]} />
            <span className="text-h2 ml-2">{item.routeId}</span>
            <span className="text-subtitle self-center ml-1 text-gray01">{item.remainSeatCnt1}석</span>
          </div>
          <div className="flex gap-4">
            <span className="text-red">
              {item.predictTime1}분({item.locationNo1}번째 전)
            </span>
            <span className="text-red">
              {item.predictTime2}분({item.locationNo2}번째 전)
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Heart />
        </div>
      </div>
    </ListItem>
  )
}

export default ArrivalListItem
