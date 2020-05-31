import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

import SvgPattern from "../svg/SvgPattern"
import ProjectCard from "./PortfolioCard"
import PortfolioModal from "./PortfolioModal"

const PortfolioFlexContainer = styled.section`
  background-color: #76aed7;
  z-index: 998;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 13px;
`

const Title = styled.h3`
  color: white;
  width: 100%;
  margin-left: 5%;
  padding-bottom: 0;
`

export default function About({ devSiteImage, tabiSiteImage }) {
  const [show, setShow] = useState(false)
  const [selectedExample, setSelectedExample] = useState({})

  const openExample = data => {
    setShow(true)
    setSelectedExample(data)
  }

  return (
    <PortfolioFlexContainer>
      <SvgPattern type="point" />
      <Title>
        <FormattedMessage id="portfolio.title" />
      </Title>
      <PortfolioModal
        show={show}
        handleClose={setShow}
        selectedExample={selectedExample}
      />

      <ProjectCard
        index="1"
        link="https://rossneilson.dev"
        cover={devSiteImage}
        openModal={openExample}
      />
      <ProjectCard
        index="2"
        link="https://tabitraveler.com"
        cover={tabiSiteImage}
        openModal={openExample}
      />
    </PortfolioFlexContainer>
  )
}
