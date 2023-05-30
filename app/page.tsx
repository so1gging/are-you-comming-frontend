'use client'
import * as Hand from '@/assets/image/waving-hand.gif'
import Guide from '@/components/Guide/Guide'
import Description from '@/components/Description/Description'
import MenuItem from '@/components/Menu/MenuItem'
import ContentLayout from '@/components/Layout/ContentLayout'

export default function Home() {
  return (
    <ContentLayout>
      <Guide src={Hand} alt="waving-hand">
        사용자님,
        <br />
        어서오세요 !
      </Guide>
      <div className="my-10">
        <Description>어떤 정보가 궁금하신가요 ?</Description>
        <MenuItem href="/bus-station/near-by" text="주변 버스정류장 찾기" />
        <MenuItem href="/favorite" text="즐겨찾는 버스 보러가기" />
      </div>
    </ContentLayout>
  )
}
