import React from "react"
import styled from "styled-components"
import cover from "../../images/cover.svg"

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: url(${props => props.background});
  background-attachment: fixed;
  background-repeat: no-repeat;
  webkit-background-size: cover;
  moz-background-size: cover;
  o-background-size: cover;
  background-size: cover;
  background-position: left top;
`

const ContactCard = styled.section`
  background-color: white;
  padding: 5px;
  z-index: 998;
  min-height: 20%;
  width: 40%;
  margin: 5% 1% 5% 1%;
  flex-grow: 2;
  padding-bottom: 20px;
  text-align: center;
  min-width: 300px;
`

// Netlify contact form
export default function Contact(props) {
  return (
    <Wrapper background={cover}>
      <ContactCard>Contact</ContactCard>
    </Wrapper>
  )
}
