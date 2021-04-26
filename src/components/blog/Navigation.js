import React from "react"
import styled from "styled-components"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

import { urlLocaleFormatting } from "../../utils/formatters"

const BarHorizontal = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  flex-flow: wrap;
  justify-content: center;
  ${"" /* margin-top: 15px; */}
  position: relative;
  z-index: 990;
`

const Home = styled(Link)`
  padding: 0% 3% 3% 3%;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => (props.colour ? props.colour : props.theme.colors.primary)};
  background-image: none;
  text-align: center;
  text-shadow: none;
  font-family: Sacramento;
  margin-top: 20px;
  transition: 1s;
  &:hover {
    color: ${props => props.theme.colors.secondary600};
  }
  &:focus {
    color: ${props => props.theme.colors.secondary600};
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
