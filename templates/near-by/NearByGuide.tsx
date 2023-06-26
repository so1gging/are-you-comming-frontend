import ThinkingFace from '@/assets/image/thinking-face.gif'
import Guide from '@/components/Guide/Guide'

interface NearByGuideProps {
  isData: boolean
}
function NearByGuide({ isData }: NearByGuideProps) {
  return (
    <Guide src={ThinkingFace} alt={'think-face'}>
      {isData ? (
        <>
          주변 버스정류장을
          <br />
          보여드릴게요 !
        </>
      ) : (
        <>
          주변에 버스정류장이
          <br />
          보이지 않네요.
        </>
      )}
    </Guide>
  )
}

export default NearByGuide
