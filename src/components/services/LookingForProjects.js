import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

const Container = styled.section`
  display: flex;
  background-color: #ff3a00b5;
  border-radius: 10px;
  padding: 10px 20px 10px 10px;
  margin-top: 30px;
  color: white;
`

const Message = styled.section`
  margin: auto;
  @media (pointer: coarse) {
    width: 80%;
  }
`

export default function LookingForProjects({ icon }) {
  const iconImage = getImage(icon)
  return (
    <Container>
      <Img image={iconImage} />
      <Message>
        <FormattedMessage
          style={{ flexGrow: 1 }}
          id="portfolio.lookingForProjects"
        />
      </Message>
    </Container>
  )
}
