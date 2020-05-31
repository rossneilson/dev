import React, { useState } from "react"
import styled from "styled-components"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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
  padding: 10px;
  z-index: 978;
  min-height: 20%;
  width: 40%;
  margin: 5% 1% 5% 1%;
  flex-grow: 2;
  padding-bottom: 20px;
  text-align: center;
  min-width: 300px;
`

const Title = styled.h3`
  margin: auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 75%;
  margin-right: 16%;
`
const FormField = styled(TextField)`
  margin: 20px;
`
const SubmitButton = styled(Button)`
  background-color: rgb(32, 150, 243);
  color: white;
  &:hover {
    background-color: rgb(250, 182, 0);
  }
  margin: auto;
  width: 25%;
  padding: 5px;
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
        .then(() => alert("Success!"))
        .catch(error => alert(error))
    }
  }

  return (
    <Wrapper background={cover}>
      <ContactCard>
        <Title>{intl.formatMessage({ id: "contact.title" })}</Title>
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
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
            <FormField
              aria-label="Name input"
              label={intl.formatMessage({ id: "contact.name" })}
              id="name"
              fullWidth
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <FormField
              aria-label="Email input"
              label={intl.formatMessage({ id: "contact.email" })}
              id="email"
              fullWidth
              error={emailError}
              helperText={
                emailError
                  ? intl.formatMessage({ id: "contact.invalidEmail" })
                  : null
              }
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
            <FormField
              aria-label="Message input"
              label={intl.formatMessage({ id: "contact.message" })}
              id="message"
              multiline
              fullWidth
              onChange={e => setMessage(e.target.value)}
            />
          </label>

          <SubmitButton
            type="submit"
            aria-label="Submit button"
            variant="contained"
            disabled={emailError}
          >
            {intl.formatMessage({ id: "contact.submit" })}
          </SubmitButton>
        </Form>
      </ContactCard>
    </Wrapper>
  )
}
