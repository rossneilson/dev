import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

const CTA = styled.button`
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 99;
  height: 50px;
  width: 150px;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.buttonColor};
  color: white;
  border: solid 1px ${props => props.theme.colors.secondary};
  cursor: pointer;
  transition: 0.2s;
  margin: 20px 10px;
  &:hover {
    background-color: ${props => props.theme.colors.buttonHoverColor};
    color: ${props => props.theme.colors.buttonColor};
    transform: translateY(-2px);
    box-shadow: 0px 0px 20px 2px #0000003c;
  }
  &:focus {
    background-color: ${props => props.theme.colors.buttonHoverColor};
    color: ${props => props.theme.colors.buttonColor};
    transform: translateY(-2px);
    box-shadow: 0px 0px 20px 2px #0000003c;
  }
  @media (pointer: coarse) {
    width: 100px;
  }
`

export default function ContactCTA() {
  return (
    <CTA
      data-sal="slide-up"
      aria-label="Contact me button"
      variant="contained"
      onClick={() => window.scrollTo(0, 99999)}
    >
      <FormattedMessage id="contact.contact" />
    </CTA>
  )
}
