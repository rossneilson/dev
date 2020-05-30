import React, { useState, useEffect } from "react"
import { FormattedMessage, changeLocale } from "gatsby-plugin-intl"
import styled, { keyframes } from "styled-components"

import cover from "../../images/cover.svg"

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(300%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`

const Background = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${props => props.cover}) bottom right;
  background-repeat: no-repeat;
  text-align: center;
  min-height: 100vh;
  webkit-background-size: cover;
  moz-background-size: cover;
  o-background-size: cover;
  background-size: cover;
  background-position: center left;
  position: relative;
`

const CenterSection = styled.section`
  font-family: Sacramento;
  animation: 1.5s ease-out 0s 1 ${slideInFromBottom};
  background-color: #2196f3;
  padding: 5% 2% 5% 2%;
  width: 45%;
  min-width: 200;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4);
`

const MainTitle = styled.h1`
  font-family: Sacramento;
  border-bottom: 2px solid;
  border-bottom-color: #fab601;
  padding-bottom: 6;
  color: white;
`

const SubTitle = styled.h2`
  font-family: Sacramento;
  color: white;
`

function Title(props) {
  const [offset, setOffset] = useState(0)

  const listener = e => {
    if (!(window.pageYOffset > 900)) {
      setOffset(window.pageYOffset)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return (
    <div>
      <Background cover={cover} style={{ backgroundPositionY: offset / 1.6 }}>
        <CenterSection>
          <MainTitle>
            <FormattedMessage id="title.top" />
          </MainTitle>
          <SubTitle>
            <FormattedMessage id="title.bottom" />
          </SubTitle>
        </CenterSection>
      </Background>
    </div>
  )
}

export default Title
