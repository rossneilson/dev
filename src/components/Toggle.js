import React from "react"
import styled from "styled-components"
import Switch from "react-switch"

const Icon = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 10px;
  color: white;
  padding-right: 2;
`

export default function Toggle(props) {
  return (
    <div>
      <Switch
        checked={props.checked}
        onChange={props.changeLanguage}
        height={50}
        width={100}
        offColor="#2196f3"
        onColor="#2196f3"
        aria-label="language switch"
        uncheckedIcon={<Icon>English</Icon>}
        checkedIcon={<Icon>日本語</Icon>}
      />
    </div>
  )
}
