import React, { Fragment } from 'react'
import styled from 'styled-components'
import MathJax from 'react-mathjax'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`

const Footer = styled.footer`
  font-size: 18px;
  color: black;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 3px solid black;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children }) => (
  <Fragment>
    <MathJax.Provider>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <span>2019.01</span>
        <span>eve@haut-kultur.group</span>
      </Footer>
    </MathJax.Provider>
  </Fragment>
)


export default Layout
