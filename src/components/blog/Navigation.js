import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"

import { urlLocaleFormatting } from "../../utils/formatters"

const BarHorizontal = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  flex-flow: wrap;
  justify-content: center;
  ${"" /* margin-top: 15px; */}
  position: relative;
  z-index: 9999;
`

const Home = styled(Link)`
  padding: 0% 3% 3% 3%;
  font-size: 200%;
  color: ${props => (props.colour ? props.colour : "#8698da")};
  background-image: none;
  text-align: center;
  text-shadow: none;
  font-family: Sacramento;
  margin-top: 20px;
  transition: 1s;
  &:hover {
    color: #5065a3;
  }
  &:focus {
    color: #5065a3;
  }
`

export default function Navigation({ colour, vertical, language }) {
  return (
    <div>
      <BarHorizontal>
        <Home colour={colour} to={urlLocaleFormatting(language, "/")}>
          <FormattedMessage id="title.full" />
        </Home>
      </BarHorizontal>
    </div>
  )
}
