import React, { useState } from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

import CryptoDonate from "dot-crypto-donate-react"

import SNS from "./sns"
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
  background-position: right;
`

const ContactCard = styled.section`
  background-color: white;
  padding: 5%;
  z-index: 9;
  min-height: 20%;
  width: 40%;
  margin: 5% 1% 5% 1%;
  flex-grow: 2;
  text-align: center;
  min-width: 300px;
`

const Title = styled.h3`
  margin: auto;
  margin-bottom: 3%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 75%;
`

const StyledInput = styled.input`
  height: 38px;
  padding: 8px 12px;
  margin: 5% 0%;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.42857143;
  font-weight: 500;
  width: 100%;
  border-style: none;
  border-width: 1px 1px 4px;
  border-color: #000 #000 #6f81b3;
  border-radius: 10px;
  background-color: ${props => {
    return props.error
      ? props.theme.colors.fail400
      : props.theme.colors.white700
  }};
  color: black;
`

const StyledButton = styled.button`
  transition: 0.2s;
  background-color: ${props => props.theme.colors.buttonColor};
  color: white;
  height: 40px;
  justify-content: space-around;
  font-size: ${props => props.theme.fontSizes.r};
  font-weight: 500;
  min-width: 30%;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: auto;
  margin-top: 2%;
  &:hover {
    background-color: ${props => props.theme.colors.buttonHoverColor};
  }
  &:focus {
    background-color: ${props => props.theme.colors.buttonHoverColor};
  }
`

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact(props) {
  const intl = useIntl()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [emailError, setEmailError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitAttempt, setSubmitAttempt] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitAttempt(submitAttempt + 1)
    if (!validEmailRegex.test(email)) {
      setEmailError(true)
    } else {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          ...{ name, email, message },
        }),
      })
        .then(() => setSuccess(true))
        .catch(error => alert(error))
    }
  }

  return (
    <Wrapper background={cover}>
      <ContactCard data-sal="slide-up">
        <Title>{intl.formatMessage({ id: "contact.title" })}</Title>
        <form name="contact" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <StyledInput
              aria-label="Name input"
              placeholder={intl.formatMessage({ id: "contact.name" })}
              id="name"
              name="name"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <StyledInput
              aria-label="Email input"
              placeholder={intl.formatMessage({ id: "contact.email" })}
              id="email"
              name="email"
              error={emailError}
              onChange={e => {
                const value = e.target.value
                if (!validEmailRegex.test(value) && submitAttempt > 0) {
                  setEmailError(true)
                } else {
                  setEmailError(false)
                }
                setEmail(e.target.value)
              }}
            />
          </label>
          <label>
            <StyledInput
              aria-label="Message input"
              placeholder={intl.formatMessage({ id: "contact.message" })}
              id="message"
              name="message"
              onChange={e => setMessage(e.target.value)}
            />
          </label>

          <StyledButton
            type="submit"
            aria-label="Submit button"
            disabled={emailError}
          >
            {intl.formatMessage({ id: "contact.submit" })}
          </StyledButton>
          {emailError
            ? intl.formatMessage({ id: "contact.invalidEmail" })
            : success
            ? intl.formatMessage({ id: "contact.success" })
            : null}
        </Form>
        <SNS github gitcoin email linkedin twitter />
        <CryptoDonate
          cryptoDomain="rossneilson.crypto"
          infuraApi="5730f284ad6741b183c921ebb0509880"
          ens="rossdev.eth"
          colors={{
            primary: "#2096f3",
            secondary: "#fde199",
            button: "#1a78c2",
            buttonSecondary: "#fab601",
            text: "#ffffff",
          }}
          text={{
            title: intl.formatMessage({ id: "donate.title" }),
            thanks: intl.formatMessage({ id: "donate.thanks" }),
            copied: intl.formatMessage({ id: "donate.copied" }),
          }}
        />
      </ContactCard>
    </Wrapper>
  )
}
