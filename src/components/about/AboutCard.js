import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import Button from "@material-ui/core/Button"

const Card = styled.section`
  background-color: white;
  z-index: 998;
  width: 60%;
  min-height: 40%;
  width: 60%;
  margin: 30px 20px 5% 20px;
  left: 6%;
  flex-grow: 2;
  box-shadow: 4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4);
`

const Title = styled.h3`
  margin-left: 10%;
`

const Paragraphs = styled.section`
  padding: 50px;
`

const CTA = styled(Button)`
  background-color: rgb(32, 150, 243);
  color: white;
  &:hover {
    background-color: rgb(250, 182, 0);
  }
  &:active {
    background-color: rgb(250, 182, 0);
  }
`

export default function AboutCard(props) {
  return (
    <Card>
      <Title>
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
        <CTA
          aria-label="Contact me button"
          variant="contained"
          onClick={() => window.scrollTo(0, 99999)}
        >
          <FormattedMessage id="contact.title" />
        </CTA>
      </Paragraphs>
    </Card>
  )
}
