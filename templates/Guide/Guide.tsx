import React, { FC } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/dist/client/image'

interface GuideProps {
  src: StaticImageData | string | { default: StaticImageData }
  alt: string
  text: string
}
const Guide: FC<GuideProps> = ({ src, alt, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={src} alt={alt} width={125} height={125} />
      <p className="text-center text-h1">{text}</p>
    </div>
  )
}

export default Guide
