/**
 * @description
 * 주변 정류소 목록 조회
 * stationId: 정류소아이디
 * stationName: 정류소명
 * mobileNo: 정류소 번호
 * regionName: 지역명
 * districtCd: 관할지역
 * centerYn: 중앙차로
 * x: X 좌표
 * y: Y 좌표
 */
interface GetBusStationAroundListOut {
  stationId: string
  stationName: string
  mobileNo: string
  regionName: string
  districtCd: string
  centerYn: string
  x: number
  y: number
}

export default GetBusStationAroundListOut
