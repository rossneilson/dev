import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import Img from "gatsby-image"

import Illustration from "../../images/developer.svg"
import SvgPattern from "../svg/SvgPattern"

const ServicesFlexContainer = styled.section`
  background-color: #f2a31991;
  z-index: 998;
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
  z-index: 998;
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
    margin-bottom: 0px;
  }
`

const Explanation = styled.section`
  width: 50%;
  min-width: 300px;
`

const BulletPointContainer = styled.section`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`

const BulletPoint = styled.section`
  min-width: 300px;
  width: 50%;
`

const Icon = styled(Img)`
  min-width: 50px;
`

const Title = styled.section`
  display: flex;
`

const Description = styled.p`
  font-size: small;
  margin-left: 40px;
`

const CTA = styled.button`
  transition: 0.2s;
  background-color: #0374cc;
  color: white;
  height: 50px;
  width: 30%;
  justify-content: space-around;
  font-size: large;
  font-weight: 500;
  min-width: 300px;
  width: 40%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: auto;
  &:hover {
    background-color: #f5b547;
  }
  &:focus {
    background-color: #f5b547;
  }
`

export default function Services({ icon1, icon2, icon3, icon4, icon5, icon6 }) {
  return (
    <ServicesFlexContainer>
      <SvgPattern type="circle" />
      <Card>
        <StyledIllustration src={Illustration} alt={"services illustration"} />
        <Explanation>
          <h3>
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
          </h3>
          <BulletPointContainer>
            <BulletPoint>
              <Title>
                <Icon loading="eager" fixed={icon1} />
                <h4 style={{ fontSize: "1.73286rem" }}>
                  <FormattedMessage id="services.1.title" />
                </h4>
              </Title>
              <Description>
                <FormattedMessage id="services.1.desc" />
              </Description>
            </BulletPoint>
            <BulletPoint>
              <Title>
                <Icon loading="eager" fixed={icon2} />
                <h2>
                  <FormattedMessage id="services.2.title" />
                </h2>
              </Title>
              <Description>
                <FormattedMessage id="services.2.desc" />
              </Description>
            </BulletPoint>
            <BulletPoint>
              <Title>
                <Icon loading="eager" fixed={icon3} />
                <h2>
                  <FormattedMessage id="services.3.title" />
                </h2>
              </Title>
              <Description>
                <FormattedMessage id="services.3.desc" />
              </Description>
            </BulletPoint>
            <BulletPoint>
              <Title>
                <Icon loading="eager" fixed={icon4} />
                <h2>
                  <FormattedMessage id="services.4.title" />
                </h2>
              </Title>
              <Description>
                <FormattedMessage id="services.4.desc" />
              </Description>
            </BulletPoint>
            <BulletPoint>
              <Title>
                <Icon loading="eager" fixed={icon5} />
                <h2>
                  <FormattedMessage id="services.5.title" />
                </h2>
              </Title>
              <Description>
                <FormattedMessage id="services.5.desc" />
              </Description>
            </BulletPoint>
            <BulletPoint>
              <Title>
                <Icon loading="eager" fixed={icon6} />
                <h2>
                  <FormattedMessage id="services.6.title" />
                </h2>
              </Title>
              <Description>
                <FormattedMessage id="services.6.desc" />
              </Description>
            </BulletPoint>
          </BulletPointContainer>
        </Explanation>
        <CTA
          aria-label="Contact me button"
          variant="contained"
          onClick={() => window.scrollTo(0, 99999)}
        >
          <FormattedMessage id="contact.title" />
        </CTA>
      </Card>
    </ServicesFlexContainer>
  )
}
