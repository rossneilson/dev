import React from "react"
import styled from "styled-components"
import { FormattedMessage, useIntl, Link } from "gatsby-plugin-intl"

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
const Explanation = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  margin: 15px 0px;
`

export default function Internationalization({}) {
  const intl = useIntl()
  return (
    <Container>
      <Title>{intl.formatMessage({ id: "services.i18n.title" })}</Title>
      <Explanation>
        {intl.formatMessage({ id: "services.i18n.explanation1" })}
      </Explanation>
      <Explanation>
        {intl.formatMessage({ id: "services.i18n.explanation2" })}
      </Explanation>
      <Explanation>
        {intl.formatMessage({ id: "services.i18n.explanation3" })}
      </Explanation>
      <Link to={"/blog"}>
        <FormattedMessage id="services.i18n.readMore" />
      </Link>
    </Container>
  )
}
