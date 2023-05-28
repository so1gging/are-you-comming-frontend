import styled, { css } from 'styled-components'
import { FC, PropsWithChildren } from 'react'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'caption' | 'subtitle' | 'body'
  color?: string
}

const h1 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`

const h2 = css`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`

const caption = css`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
`

const subtitle = css`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`

const body = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

const Typography: FC<PropsWithChildren<TypographyProps>> = ({ variant, color, children }) => {
  return (
    <Wrapper variant={variant} color={color}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.h1<{ variant: TypographyProps['variant']; color: TypographyProps['color'] }>`
  ${({ color }) => {
    if (color === undefined) {
      return
    }
    switch (color) {
      case 'blue':
        return `color: var(--color-blue);`
      case 'red':
        return `color: var(--color-red);`
      case 'black':
        return `color: var(--color-black);`
      default:
        return `color: ${color};`
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return h1
      case 'h2':
        return h2
      case 'caption':
        return caption
      case 'subtitle':
        return subtitle
      default:
        return body
    }
  }}
`

export default Typography
