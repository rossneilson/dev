import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import AboutCard from "./AboutCard"
import ProgressBar from "./ProgressBar"
import SvgPattern from "../svg/SvgPattern"

const FlexContainer = styled.section`
  background-color: #76aed7;
  z-index: 998;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`

const RightWrapper = styled.section`
  z-index: 998;
  margin: auto;
  margin-top: 4%;
  width: 30%;
  min-width: 300px;
`

const ProfileImage = styled(Img)`
  z-index: 998;
  margin: auto;
  transform: scale(0.95);
  width: 100%;
  max-width: 300px;
`

export default function About(props) {
  return (
    <FlexContainer>
      <SvgPattern type="metal" />
      <AboutCard />
      <RightWrapper>
        <ProfileImage loading="eager" fluid={props.image} />
        <ProgressBar />
      </RightWrapper>
    </FlexContainer>
  )
}
