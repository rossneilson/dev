import React, { useState } from "react"
import styled from "styled-components"
import Switch from "react-switch"
import { changeLocale } from "gatsby-plugin-intl"

const Wrap = styled.section`
  position: ${props => props.position};
  z-index: 999999999;
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
  font-size: 10px;
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
    if (language === "jp") {
      return true
    } else if (language === "en") {
      return false
    }
  }

  const [checked, setChecked] = useState(checkLanguage())

  const changeLanguage = e => {
    setChecked(!checked)
    // await new Promise(r => setTimeout(r, 1))
    if (checked) {
      changeLocale("en")
    } else {
      changeLocale("jp")
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
          offColor="#2196f3"
          onColor="#2196f3"
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
