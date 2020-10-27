import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

import * as Keyframes from "../../utils/keyframes"

const Modal = styled.section`
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? "block" : "none")};
  animation: ${props =>
    props.show
      ? css`
          1s ease-out 0s 1 ${Keyframes.fadeIn} 
        `
      : "none"};
`

const ModalMain = styled.section`
  z-index: 99999999;
  position: fixed;
  background: white;
  width: 80%;
  min-width: 350px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${props =>
    props.show
      ? css`
          1s ease-out 0s 1 ${Keyframes.slideInFromBottomModal} 
        `
      : "none"};
`
const Bar = styled.section`
  z-index: 998;
  display: flex;
  align-items: center;
  padding: 9px;
  background: hsl(0, 0%, 19%);
`

const Dot = styled.section`
  margin-right: 4px;
  width: 12px;
  height: 12px;
  background: hsl(0, 0%, 67%);
  border-radius: 100%;
  cursor: pointer;
`

const Card = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Image = styled(Img)`
  min-width: 350px;
  width: 50%;
  flex-grow: 1;
`

const Description = styled.section`
  padding: 0px 30px 20px 30px;
  min-width: 340px;
  max-height: 10%;
  overflow: auto;
  width: 50%;
  flex-grow: 1;
  background-color: #444444;
  color: white;
  font-size: 70%;
`

const ButtonLink = styled.a`
  transition: 0.2s;
  background-color: rgb(32, 150, 243);
  color: white;
  height: 50px;
  justify-content: space-around;
  font-size: large;
  font-weight: 500;
  width: 300px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: auto;
  &:hover {
    background-color: rgb(250, 182, 0);
  }
  &:focus {
    background-color: rgb(250, 182, 0);
  }
`

export default function PortfolioModal({ handleClose, show, selectedExample }) {
  const { frontmatter, html } = selectedExample

  return (
    <Modal
      show={show}
      onClick={event => {
        if (event.target === event.currentTarget) {
          handleClose(false)
        }
      }}
    >
      <ModalMain show={show}>
        <Bar onClick={() => handleClose(false)}>
          <Dot style={{ background: "red" }} />
          <Dot />
          <Dot />
        </Bar>
        <Card>
          {frontmatter.image ? (
            <Image
              loading="eager"
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          ) : null}
          <Description>
            <h2 style={{ color: "white" }}>{frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ButtonLink
              aria-label="Go to website button"
              rel="canonical"
              href={frontmatter.link}
              target="_blank"
            >
              Go to site
            </ButtonLink>
          </Description>
        </Card>
      </ModalMain>
    </Modal>
  )
}
