import SVG from '@/assets/image/heart.svg'

interface HeartProps {
  isOn?: boolean
}
const Heart = ({ isOn }: HeartProps) => {
  return <SVG fill={isOn ? '#E06469' : '#D6DADF'} />
}

export default Heart
