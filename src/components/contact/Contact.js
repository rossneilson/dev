import React, { useState } from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import TwitterIcon from "@material-ui/icons/Twitter"
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

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

const Icons = styled.section`
  margin-right: 7%;
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
              name="name"
              fullWidth
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label>
            <FormField
              aria-label="Email input"
              label={intl.formatMessage({ id: "contact.email" })}
              id="email"
              name="email"
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
              name="message"
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
        <Icons>
          <Link
            target="_blank"
            rel="canonical"
            href="https://twitter.com/Ross__N"
          >
            <TwitterIcon />
          </Link>

          <Link
            target="_blank"
            rel="canonical"
            href="mailto:me@rossneilson.dev"
          >
            <EmailIcon />
          </Link>

          <Link
            target="_blank"
            rel="canonical"
            href="https://www.linkedin.com/in/ross-neilson-99b62b14a/"
          >
            <LinkedInIcon />
          </Link>
        </Icons>
      </ContactCard>
    </Wrapper>
  )
}
