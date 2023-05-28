import React, { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/dist/client/image'

interface GuideProps {
  src: StaticImageData | string | { default: StaticImageData }
  alt: string
}
const Guide: FC<PropsWithChildren<GuideProps>> = ({ src, alt, children }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Image src={src} alt={alt} width={125} height={125} />
      <p className="text-center text-h1">{children}</p>
    </div>
  )
}

export default Guide
