import React from "react"
import styled from "styled-components"

import cover from "../images/cover.svg"
import robot from "../images/robot.svg"

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
  background-color: ${props => props.theme.colors.primary};
  padding: 5% 2% 5% 2%;
  width: 50%;
  min-width: 270px;
`

const MainTitle = styled.h1`
  margin-top: 30px;
  border-bottom: 2px solid;
  border-bottom-color: ${props => props.theme.colors.secondary};;
  padding-bottom: 6;
  color: white;
`

function PageNotFound(props) {
  return (
    <div>
      <Background cover={cover}>
        <CenterSection>
          <MainTitle>
            404 - Page not found
            <br />
            404 - ページが見つかりません
          </MainTitle>
          <img src={robot} />
        </CenterSection>
      </Background>
    </div>
  )
}

export default PageNotFound
