import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

const Card = styled.section`
  background-color: white;
  z-index: 9;
  width: 60%;
  margin: 5% 4% 5% 4%;
  left: 6%;
  flex-grow: 2;
  box-shadow: 4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4);
`

const Title = styled.h3`
  margin-left: 10%;
  margin-bottom: 0px;
`

const Paragraphs = styled.section`
  padding: 2% 8% 8% 8%;
`

const OutOfJapanWarning = styled.section`
  display: flex;
  background-color: ${props => props.theme.colors.lightWarning};
  border-radius: 10px;
  padding: 10px;
  font-size: ${props => props.theme.fontSizes.s};
`

const Message = styled.section`
  width: 90%;
`

export default function AboutCard(props) {
  return (
    <Card data-sal="slide-up">
      <Title>
        <svg
          style={{ transform: "translateY(10px)", marginRight: "4px" }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-face-id"
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
          <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <line x1="9" y1="10" x2="9.01" y2="10" />
          <line x1="15" y1="10" x2="15.01" y2="10" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
        </svg>
        <FormattedMessage id="about.title" />
      </Title>
      <Paragraphs>
        <p>
          <FormattedMessage id="about.line1" />
        </p>
        <p>
          <FormattedMessage id="about.line2" />
        </p>
        <p>
          <FormattedMessage id="about.line3" />
        </p>
        <p>
          <FormattedMessage id="about.line4" />
        </p>
        <p>
          <FormattedMessage id="about.techs" />
        </p>
        <OutOfJapanWarning>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user-exclamation"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="9" cy="7" r="4" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <line x1="19" y1="7" x2="19" y2="10" />
            <line x1="19" y1="14" x2="19" y2="14.01" />
          </svg>
          <Message>
            <FormattedMessage style={{ flexGrow: 1 }} id="about.outOfJapan" />
          </Message>
        </OutOfJapanWarning>
      </Paragraphs>
    </Card>
  )
}
