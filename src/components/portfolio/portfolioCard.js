import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import Img from "gatsby-image"

const Card = styled.section`
  zindex: 998;
  width: 400px;
  height: 25%;
  margin: 1% 1% 5% 1%;
  flexgrow: 2;
  background-color: #ffffffd2;
`

const Bar = styled.section`
  z-index: 998;
  display: flex;
  align-items: center;
  padding: 9px;
  background: hsl(0, 0%, 19%);
`

const Dot = styled.section`
  margin-right: 4px;
  width: 8px;
  height: 8px;
  background: hsl(0, 0%, 67%);
  border-radius: 100%;
`

const ImageBackground = styled.section`
  background: linear-gradient(
    90deg,
    rgba(28, 5, 0, 1) 0%,
    rgba(121, 57, 9, 1) 36%,
    rgba(0, 179, 255, 1) 100%
  );
  width: 100%;
  overflow: hidden;
  position: relative;
`

const ProjectImage = styled(Img)`
  transition: all 1s ease-in-out;
  moz-transition: all 1s ease-in-out;
  cursor: pointer;
  &:hover: {
    transform: scale(1.1);
    opacity: 0.4;
  }
`

const ProjectText = styled.section`
  padding: 0px 20px 20px 20px;
  color: #f2a319;
  min-height: 110px;
`

// Fix hover to make clickable more obvious
export default function PortfolioCard({ cover, index, openModal }) {
  return (
    <Card
      onClick={() => {
        openModal({ cover, index })
      }}
    >
      <Bar>
        <Dot />
        <Dot />
        <Dot />
      </Bar>
      <ImageBackground>
        {cover ? <ProjectImage fluid={cover} /> : null}
      </ImageBackground>
      <ProjectText>
        <h4>
          <FormattedMessage id={"portfolio." + index + ".title"} />
        </h4>
        <FormattedMessage id={"portfolio." + index + ".desc"} />
      </ProjectText>
    </Card>
  )
}
