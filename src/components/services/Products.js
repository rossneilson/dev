import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

const ProductsContainer = styled.section`
  width: 100%;
`
const Split = styled.section`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Option = styled.section`
  width: 25%;
  border: 2px solid ${props => props.theme.colors.secondary400};
  margin: 70px 0px;
  border-radius: 12px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`

const MainOption = styled(Option)`
  z-index: 3;
  transform: scale(1.1);
  background-color: white;
  box-shadow: 0 0 35px -10px ${props => props.theme.colors.primary};
  @media (pointer: coarse) {
    box-shadow: none;
    margin: 20px 0px;
    transform: scale(1);
  }
`

const OptionLeft = styled(Option)`
  border-right: none;
  transform: scale(0.9);
  z-index: 2;
  @media (pointer: coarse) {
    margin: 20px 0px;
    border-right: 2px solid ${props => props.theme.colors.secondary400};
    transform: scale(1);
  }
`

const OptionRight = styled(Option)`
  border-left: none;
  transform: scale(0.9);
  z-index: 2;
  @media (pointer: coarse) {
    margin: 20px 0px;
    border-left: 2px solid ${props => props.theme.colors.secondary400};
    transform: scale(1);
  }
`

const Packages = styled.section`
  width: 100%;
`

const Title = styled.h2`
  width: 100%;
  color: black;
  background-color: ${props => props.theme.colors.secondary300};
  border-bottom: 2px solid ${props => props.theme.colors.secondary400};
  margin: 0px;
  padding: 5px;
  border-radius: 8px 8px 0px 0px;
  font-size: ${props => props.theme.fontSizes.r};
`
const TitleMain = styled(Title)`
  background-color: ${props => props.theme.colors.primary200};
`

const Content = styled.section`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 2;
  @media (pointer: coarse) {
    margin: 10px;
  }
`
const List = styled.ul`
  list-style: none;
  text-align: left;
  margin-left: 1em;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
`

const Text = styled.p``

function SVGCheck({}) {
  return (
    <svg
      style={{ margin: "25px 10px 0px 0px" }}
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-check"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#5baef6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  )
}

function SVGAdd({}) {
  return (
    <svg
      style={{ margin: "0px 10px 0px 0px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#5baef6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="12" y1="9" x2="12" y2="15" />
    </svg>
  )
}

const Point = styled.section`
  max-width: 80%;
  margin: 20px 0px;
`

const ButtonLight = styled.button`
  background-color: ${props => props.theme.colors.secondary300};
  color: ${props => props.theme.colors.black};
  border-radius: 20px;
  padding: 10px;
  border: solid 1px ${props => props.theme.colors.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
  &:focus {
    background-color: ${props => props.theme.colors.primary};
  }
`
const ButtonDark = styled.button`
  background-color: ${props => props.theme.colors.buttonColor};
  color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 10px;
  border: solid 1px ${props => props.theme.colors.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.buttonHoverColor};
    color: ${props => props.theme.colors.buttonColor};
  }
  &:focus {
    background-color: ${props => props.theme.colors.buttonHoverColor};
    color: ${props => props.theme.colors.buttonColor};
  }
`

export default function Products({}) {
  return (
    <ProductsContainer
    // data-sal="slide-up"
    >
      <Split>
        <OptionLeft>
          <Title>Website</Title>
          <Content>
            <List>
              <ListItem>
                <SVGCheck />
                <Point>Professional business site</Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>Simple interactive features</Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>Easy to edit content</Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>Localization - Dynamic designs and campaigns</Point>
              </ListItem>
            </List>
            <ButtonLight onClick={() => window.scrollTo(0, 99999)}>
              Contact me
            </ButtonLight>
          </Content>
        </OptionLeft>
        <MainOption>
          <TitleMain>Web app</TitleMain>
          <Content>
            <List>
              <ListItem>
                <SVGCheck />
                <Point>Full application on web</Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>App like features - no download</Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>E-commerce /business app /backend system</Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>Full Internationalization</Point>
              </ListItem>
            </List>
            <ButtonDark onClick={() => window.scrollTo(0, 99999)}>
              Contact me
            </ButtonDark>
          </Content>
        </MainOption>
        <OptionRight>
          <Title>Additional Options</Title>
          <Content>
            <List>
              <ListItem>
                <SVGAdd />
                <Point>Admin, support, updates, reports, enhancements</Point>
              </ListItem>
              <ListItem>
                <SVGAdd />
                <Point>Translation - EN→JP / JP→EN</Point>
              </ListItem>
              <ListItem>
                <SVGAdd />
                <Point>
                  Unsure what your business needs? Lets talk about what is best
                  for you
                </Point>
              </ListItem>
            </List>
            <ButtonLight onClick={() => window.scrollTo(0, 99999)}>
              Contact me
            </ButtonLight>
          </Content>
        </OptionRight>
      </Split>
    </ProductsContainer>
  )
}
