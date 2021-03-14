import React, { useState } from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

import SvgPattern from "../svg/SvgPattern"
import ProjectCard from "./PortfolioCard"
import PortfolioModal from "./PortfolioModal"

const Container = styled.section`
  background-color: ${props => props.theme.colors.primary300};
  z-index: 9;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 13px;
`
const PortfolioFlexContainer = styled.section`
  z-index: 9;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  position: relative;
  padding: 13px;
`

const Title = styled.h2`
  color: ${props => props.theme.colors.secondary300};
  width: 100%;
  margin-left: 4%;
  font-size: ${props => props.theme.fontSizes.xl};
`

export default function Portfolio({ sites }) {
  const [show, setShow] = useState(false)
  const [selectedExample, setSelectedExample] = useState({ frontmatter: {} })
  const ProjectCards = []

  const openExample = data => {
    setShow(true)
    setSelectedExample(data)
  }

  sites.map(site => {
    ProjectCards.push(<ProjectCard {...site.node} openModal={openExample} />)
  })

  return (
    <Container>
      <SvgPattern type="point" />

      <Title>
        <svg
          style={{ transform: "translateY(10px)" }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-browser"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffcd80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="8" y1="4" x2="8" y2="8" />
        </svg>
        <FormattedMessage id="portfolio.title" />
      </Title>
      {show ? (
        <PortfolioModal
          show={show}
          handleClose={setShow}
          selectedExample={selectedExample}
        />
      ) : null}
      <PortfolioFlexContainer data-sal="slide-up">
        {ProjectCards}
      </PortfolioFlexContainer>
    </Container>
  )
}
