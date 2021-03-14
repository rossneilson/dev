import React, { useState } from "react"
import styled from "styled-components"
import Switch from "react-switch"
import { changeLocale } from "gatsby-plugin-intl"

const Wrap = styled.section`
  position: ${props => props.position};
  z-index: 99;
  margin: 10px;
  margin-right: 10px;
  right: ${props => (props.right ? 0 : null)};
  @media (pointer: coarse) {
    bottom: ${props => (props.top ? "auto" : 0)};
  }
`

const Icon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 0.6rem;
  color: white;
  padding-right: 2;
`

export default function Toggle({
  language,
  right = true,
  position = "fixed",
  top = true,
}) {
  const checkLanguage = () => {
    if (language === "ja") {
      return true
    } else if (language === "en") {
      return false
    }
  }

  const [checked, setChecked] = useState(checkLanguage())

  const changeLanguage = e => {
    setChecked(!checked)
    if (checked) {
      changeLocale("en")
    } else {
      changeLocale("ja")
    }
  }

  return (
    <Wrap right={right} position={position} top={top}>
      <label>
        <Switch
          checked={checked}
          onChange={changeLanguage}
          height={50}
          width={100}
          offColor="#1a78c1"
          onColor="#1a78c1"
          aria-label="language switch"
          role="button"
          id="language switch"
          aria-pressed={checked}
          uncheckedIcon={<Icon>English</Icon>}
          checkedIcon={<Icon>日本語</Icon>}
        />
      </label>
    </Wrap>
  )
}
