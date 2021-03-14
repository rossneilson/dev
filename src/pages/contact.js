import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

// import "../index.css"

import Toggle from "../components/Toggle"
import SignUp from "../components/contact/SignUp"
import Contact from "../components/contact/Contact"

const MainTitle = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  margin-top: 5px;
  font-family: Sacramento;
  cursor: pointer;
  color: ${props => props.theme.colors.primary300};
  font-size: ${props => props.theme.fontSizes.xl};
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
  &:focus {
    color: ${props => props.theme.colors.secondary};
  }
`

export default function ContactPage(props) {
  return (
    <div>
      <MainTitle to={"/"}>
        <FormattedMessage id="title.full" />
      </MainTitle>
      <Toggle right language={props.pageContext.intl.language} />
      <Contact />
      <SignUp language={props.pageContext.intl.language} />
    </div>
  )
}
