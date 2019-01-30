import styled from 'styled-components'
import React from 'react'

const IMG = styled.img`
  width: 100vw;
  position: relative;
  left: 0;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
`
const BgImage = ({ src }) => <IMG src={src} />

export default BgImage
