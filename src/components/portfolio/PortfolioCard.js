import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Card = styled.section`
  z-index: 998;
  width: 400px;
  height: 396px;
  margin: 1% 1% 5% 1%;
  flexgrow: 2;
  background-color: #ffffffd2;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    opacity: 0.8;
    transform: translateY(-15px);
  }
  &:focus {
    opacity: 0.8;
    transform: translateY(-15px);
  }

  @media (pointer: coarse) {
    height: 25%;
  }
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

const ProjectText = styled.section`
  padding: 5px 20px 20px 20px;
  min-height: 110px;
`

const Desc = styled.section`
  font-size: 0.8rem;
`

export default function PortfolioCard({ frontmatter, html, openModal }) {
  const { title, description, image } = frontmatter
  return (
    <Card
      onClick={() => {
        openModal({ frontmatter, html })
      }}
    >
      <Bar>
        <Dot />
        <Dot />
        <Dot />
      </Bar>
      {image ? (
        <Img loading="eager" fluid={image.childImageSharp.fluid} />
      ) : null}
      <ProjectText>
        <h2 style={{ marginTop: "2%" }}>{title}</h2>
        <Desc>{description}</Desc>
      </ProjectText>
    </Card>
  )
}
