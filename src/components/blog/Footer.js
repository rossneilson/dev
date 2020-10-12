import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { FormattedMessage } from "react-intl"

const Wrapper = styled.section`
  width: 50%;
  margin: auto !important;
  margin-bottom: 50px !important;
  display: flex;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 9px 1px #0000001c;
  background: white;
  @media (pointer: coarse) {
    width: 70%;
    margin-left: 10%;
    flex-direction: column;
  }
`

const Description = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: auto;
`

const Image = styled(Img)`
  width: 20%;
  height: 100%;
  margin-right: 10px;
  min-width: 100px;
  @media (pointer: coarse) {
    margin: auto;
  }
`
const CTA = styled(Link)`
  text-align: center;
  color: white !important;
  padding: 12px;
  background: #f79a60;
  border-radius: 5px;
  transition: 0.5s;
  text-shadow: none;
  width: 150px;
  align-self: flex-end;
  z-index: 99999;
  &:hover {
    background: #5065a3;
  }
  &:focus {
    background: #5065a3;
  }
  @media (pointer: coarse) {
    align-self: auto;
  }
`

export default function Footer(props) {
  return (
    <Wrapper>
      <Image fluid={props.image} />
      <Description>
        <h3>
          <FormattedMessage id="main.names" />
        </h3>
        <blockquote>
          <FormattedMessage id="blog.authorDesc" />
        </blockquote>
        <CTA to="/">
          <FormattedMessage id="blog.cta" />
        </CTA>
      </Description>
    </Wrapper>
  )
}
