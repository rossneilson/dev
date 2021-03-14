import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

import Illustration from "../../images/developer.svg"
import SvgPattern from "../svg/SvgPattern"
import Products from "./Products"
import KeyPoints from "./KeyPoints"
import LookingForProjects from "./LookingForProjects"
import Localisation from "./Internationalization"

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
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-directions"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#76aed7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
              <path d="M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
              <line x1="12" y1="22" x2="12" y2="17" />
              <line x1="12" y1="13" x2="12" y2="9" />
              <line x1="12" y1="5" x2="12" y2="3" />
            </svg>
            <FormattedMessage id="services.title" />
          </ServiceHeader>
          <Localisation />
        </HalfContainer>
        <StyledIllustration src={Illustration} alt={"services illustration"} />

        <KeyPoints {...icons} />
        <LookingForProjects icon={icons.discount} />
        <Products />
      </Card>
    </ServicesFlexContainer>
  )
}
