import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

import Illustration from "../../images/ethDeveloper.svg"
import SvgPattern from "../svg/SvgPattern"
import KeyPoints from "./KeyPoints"
import Explanation from "./Explanation"

const ServicesFlexContainer = styled.section`
  background-color: ${props => props.theme.colors.secondary200};
  z-index: 9;
  display: flex;
  max-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

const Card = styled.section`
  padding: 2%;
  background-color: white;
  z-index: 9;
  width: 95%;
  margin: 15px;
  margin-bottom: 30px;
  box-shadow: 4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4);
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`

const StyledIllustration = styled.img`
  width: 50%;
  min-width: 300px;
  object-fit: contain;
  @media (pointer: coarse) {
    max-height: 30vh;
  }
`
const ServiceHeader = styled.h3`
  margin-top: 0;
`

const HalfContainer = styled.section`
  width: 40%;
  min-width: 300px;
  @media (pointer: coarse) {
    width: 80%;
  }
`

export default function Services({ icons }) {
  return (
    <ServicesFlexContainer>
      <SvgPattern type="circle" />
      <Card>
        <HalfContainer data-sal="slide-up">
          <ServiceHeader>
            <svg
              style={{ transform: "translateY(10px)", marginRight: "4px" }}
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#76aed7"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 12l6 -9l6 9l-6 9z" />
              <path d="M6 12l6 -3l6 3l-6 2z" />
            </svg>
            <FormattedMessage id="tech.title" />
          </ServiceHeader>
          <Explanation />
        </HalfContainer>
        <StyledIllustration
          src={Illustration}
          alt={"technologies illustration"}
        />

        <KeyPoints {...icons} />
      </Card>
    </ServicesFlexContainer>
  )
}
