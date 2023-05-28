import { FC } from 'react'
import { UrlObject } from 'url'
import Link from 'next/link'
import ArrowRight from '@/assets/image/arrow-right.svg'

interface RoundMenuItemProps {
  href: string | UrlObject
  text: string
}
const RoundMenuItem: FC<RoundMenuItemProps> = ({ href, text }) => {
  return (
    <Link href={href} className="h-55 w-full flex justify-between items-center rounded-2xl bg-white px-5">
      <div className="text-h2">{text}</div>
      <ArrowRight color="#1A1E27" />
    </Link>
  )
}

export default RoundMenuItem
