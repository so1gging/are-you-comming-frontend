import ContentLayout from '@/components/Layout/ContentLayout'
import Guide from '@/components/Guide/Guide'
import ThinkingFace from '@/assets/image/thinking-face.gif'

export default function Page() {
  return (
    <ContentLayout backgroundColor="bg01">
      <Guide src={ThinkingFace} alt={'think-face'}>
        주변에 버스정류장이
        <br />
        보이지 않네요.
      </Guide>
    </ContentLayout>
  )
}
