import React, { useState } from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

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

const Icons = styled.section`
  margin-top: 25px;
`

const Link = styled.a`
  margin: 10px;
  color: #2096f3;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 1px,
    #ffff 1px,
    #ffff 2px,
    rgba(0, 0, 0, 0) 2px
  );
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
        <Icons>
          <Link
            target="_blank"
            rel="canonical"
            aria-label="Twitter"
            href="https://twitter.com/RossNeilson_dev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#2096f3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
            </svg>
          </Link>

          <Link
            target="_blank"
            rel="canonical"
            aria-label="Email me"
            href="mailto:me@rossneilson.dev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#2096f3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </Link>

          <Link
            target="_blank"
            rel="canonical"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/ross-neilson-99b62b14a/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#2096f3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </Link>
        </Icons>
      </ContactCard>
    </Wrapper>
  )
}
