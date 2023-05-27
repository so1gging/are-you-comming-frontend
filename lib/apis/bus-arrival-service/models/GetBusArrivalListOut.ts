/** @description
 * 버스도착정보조회
 * resultCode: 결과코드
 * resultMessage: 결과메시지
 * stationId: 정류소아이디
 * routeId: 노선아이디
 * locationNo1: 첫번째차량위치정보 (몇번째 전 정류소)
 * predictTime1: 첫번째차량도착예정시간 (몇 분후 도착)
 * lowPlate1: 첫번째차량저상버스여부 (0:일반버스,1:저상버스)
 * plateNo1: 첫번째차량차량번호
 * remainSeatCnt1: 첫번째차량빈자리수 (-1:정보없음, 0-:빈자리 수)
 * locationNo2: 두번째차량위치정보 (몇번째 전 정류소)
 * predictTime2: 두번째차량도착예정시간 (몇 분후 도착)
 * lowPlate2: 두두번째차량저상버스여부 (0:일반버스,1:저상버스)
 * plateNo2: 두번째차량차량번호
 * remainSeatCnt2: 두번째차량빈자리수 (-1:정보없음, 0-:빈자리 수)
 * staOrder: 정류소순번
 * flag: 상태구분 (RUN:운행중, PASS:운행중, STOP:운행종료, WAIT:회차지대기)
 */
interface GetBusArrivalListOut {
  resultCode: string
  resultMessage: string
  stationId: string
  routeId: string
  locationNo1: number
  predictTime1: number
  lowPlate1: string
  plateNo1: string
  remainSeatCnt1: number
  locationNo2: number
  predictTime2: number
  lowPlate2: string
  plateNo2: string
  remainSeatCnt2: number
  staOrder: number
  flag: string
}

export default GetBusArrivalListOut
