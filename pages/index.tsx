import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  * {
    font-family: "Gill Sans", Verdana, Arial, sans-serif;
    margin: 0;
    padding: 0;
    border: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #10e;
`

const Title = styled.div`
  color: #1e0;
  font-size: 64px;
  margin-bottom: 24px;
`

const Subtitle = styled(Title)`
  color: #1e0;
  font-size: 48px;
  margin: 0;
`

export default () => (
  <>
    <GlobalStyles />
    <Wrapper>
      <Title>Granmoe Technologies, LLC</Title>
      <Subtitle>Coming Soon</Subtitle>
    </Wrapper>
  </>
)
