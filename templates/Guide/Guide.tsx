import React, { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { StaticImageData } from 'next/dist/client/image'
import Typography from '@/components/Typography/Typography'

interface GuideProps {
  src: StaticImageData | string | { default: StaticImageData }
  alt: string
  text: string
}
const Guide: FC<GuideProps> = ({ src, alt, text }) => {
  return (
    <Wrapper>
      <Image src={src} alt={alt} width={125} height={125} />
      <Typography variant="h1">{text}</Typography>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Guide
