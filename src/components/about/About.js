import React from "react"
import styled from "styled-components"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

import AboutCard from "./AboutCard"
import SvgPattern from "../svg/SvgPattern"

const FlexContainer = styled.section`
  background-color: ${props => props.theme.colors.primary300};
  z-index: 9;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`

const RightWrapper = styled.section`
  z-index: 9;
  margin: auto;
  margin-top: 4%;
  width: 30%;
  min-width: 300px;
`

const ProfileImage = styled(Img)`
  z-index: 9;
  margin: 1.5rem auto;
  transform: scale(0.95);
  width: 100%;
  max-width: 400px;
`

export default function About(props) {
  const imageData = getImage(props.image)

  return (
    <FlexContainer>
      <SvgPattern type="metal" />
      <AboutCard />
      <RightWrapper>
        <ProfileImage image={imageData} alt="Profile image" />
      </RightWrapper>
    </FlexContainer>
  )
}
