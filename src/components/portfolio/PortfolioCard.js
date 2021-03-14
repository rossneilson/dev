import React from "react"
import styled from "styled-components"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

const Card = styled.section`
  z-index: 9;
  width: 400px;
  height: 396px;
  margin: 1% 1% 5% 1%;
  background-color: #ffffffd2;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0px 0px 20px 9px #0000003c;
    transform: translateY(-5px);
  }
  &:focus {
    box-shadow: 0px 0px 20px 9px #0000003c;
    transform: translateY(-5px);
  }

  @media (pointer: coarse) {
    height: 25%;
  }
`

const Bar = styled.section`
  z-index: 9;
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

const ProjectText = styled.section`
  padding: 5px 20px 20px 20px;
  min-height: 110px;
`

const Desc = styled.section`
  font-size: ${props => props.theme.fontSizes.s};
`

const Image = styled(Img)`
  height: 55%;
  z-index: -1;
`

export default function PortfolioCard({ frontmatter, html, openModal }) {
  const { title, description, images } = frontmatter
  const imageData = getImage(images[0])
  return (
    <Card
      data-sal="slide-up"
      onClick={() => {
        openModal({ frontmatter, html })
      }}
    >
      <Bar>
        <Dot />
        <Dot />
        <Dot />
      </Bar>
      {images ? <Image image={imageData} /> : null}
      <ProjectText>
        <h2 style={{ marginTop: "2%" }}>{title}</h2>
        <Desc>{description}</Desc>
      </ProjectText>
    </Card>
  )
}
