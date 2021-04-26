import React from "react"
import styled from "styled-components"
import { FormattedMessage, useIntl, Link } from "gatsby-plugin-intl"
import SNS from "../contact/sns"

const Container = styled.section`
  width: 100%;
  padding: 20px 50px 20px 20px;
  @media (pointer: coarse) {
    padding: 10px;
  }
`
const Title = styled.h4`
  font-size: ${props => props.theme.fontSizes.l};
`
const Para = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  margin: 15px 0px;
`

export default function Explanation({}) {
  const intl = useIntl()
  return (
    <Container>
      <Title>{intl.formatMessage({ id: "tech.explanation.title" })}</Title>
      <Para>{intl.formatMessage({ id: "tech.explanation.explanation1" })}</Para>
      <Para>{intl.formatMessage({ id: "tech.explanation.explanation2" })}</Para>
      <Para>{intl.formatMessage({ id: "tech.explanation.explanation3" })}</Para>
      <SNS github gitcoin />
    </Container>
  )
}
