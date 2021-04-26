import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

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

export default function Products({}) {
  return (
    <ProductsContainer data-sal="slide-up">
      <Split>
        <OptionLeft>
          <Title>
            <FormattedMessage id={"services.products.site.title"} />
          </Title>
          <Content>
            <List>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.site.1"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.site.2"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.site.3"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.site.4"} />
                </Point>
              </ListItem>
            </List>
            <ButtonLight onClick={() => window.scrollTo(0, 99999)}>
              <FormattedMessage id={"services.products.site.contact"} />
            </ButtonLight>
          </Content>
        </OptionLeft>
        <MainOption>
          <TitleMain>
            <FormattedMessage id={"services.products.app.title"} />
          </TitleMain>
          <Content>
            <List>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.app.1"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.app.2"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.app.3"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGCheck />
                <Point>
                  <FormattedMessage id={"services.products.app.4"} />
                </Point>
              </ListItem>
            </List>
            <ButtonDark onClick={() => window.scrollTo(0, 99999)}>
              <FormattedMessage id={"services.products.app.contact"} />
            </ButtonDark>
          </Content>
        </MainOption>
        <OptionRight>
          <Title>
            <FormattedMessage id={"services.products.options.title"} />
          </Title>
          <Content>
            <List>
              <ListItem>
                <SVGAdd />
                <Point>
                  <FormattedMessage id={"services.products.options.1"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGAdd />
                <Point>
                  <FormattedMessage id={"services.products.options.2"} />
                </Point>
              </ListItem>
              <ListItem>
                <SVGAdd />
                <Point>
                  <FormattedMessage id={"services.products.options.3"} />
                </Point>
              </ListItem>
            </List>
            <ButtonLight onClick={() => window.scrollTo(0, 99999)}>
              <FormattedMessage id={"services.products.options.contact"} />
            </ButtonLight>
          </Content>
        </OptionRight>
      </Split>
    </ProductsContainer>
  )
}
