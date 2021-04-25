import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"

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
  width: 60%;
  height: 600px;
  transition: 1s;
  /* flex-grow: 1; */
  @media (pointer: coarse) {
    height: 25%;
  }
`

const Description = styled.section`
  padding: 30px 30px 20px 30px;
  min-width: 340px;
  max-height: 10%;
  overflow: auto;
  width: 40%;
  flex-grow: 1;
  background-color: #444444;
  color: white;
  font-size: ${props => props.theme.fontSizes.s};
`

const ButtonLink = styled.a`
  transition: 0.2s;
  background-color: ${props => props.theme.colors.buttonColor};
  color: white;
  height: 50px;
  justify-content: space-around;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 500;
  width: 300px;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: auto;
  &:hover {
    background-color: ${props => props.theme.colors.buttonHoverColor};
  }
  &:focus {
    background-color: ${props => props.theme.colors.buttonHoverColor};
  }
`

export default function PortfolioModal({ handleClose, show, selectedExample }) {
  const { frontmatter, html } = selectedExample
  const [imageIndex, setImageIndex] = useState(0)
  const images = []
  if (frontmatter.images) {
    frontmatter.images.forEach(image => {
      images.push(getImage(image))
    })
  }
  var interval

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex(imageIndex =>
        imageIndex < images.length - 1 ? imageIndex + 1 : 0
      )
    }, 4000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Modal
      show={show}
      onClick={event => {
        if (event.target === event.currentTarget) {
          handleClose(false)
          setImageIndex(0)
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
          {<Image image={images[imageIndex]} />}
          <Description>
            <h2 style={{ color: "white" }}>{frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ButtonLink
              aria-label="Go to website button"
              rel="canonical"
              href={frontmatter.link}
              target="_blank"
            >
              <FormattedMessage id="portfolio.goToSiteButton" />
            </ButtonLink>
            {frontmatter.github ? (
              <ButtonLink
                style={{ marginLeft: "10px" }}
                aria-label="View on github button"
                rel="canonical"
                href={frontmatter.github}
                target="_blank"
              >
                <FormattedMessage id="portfolio.githubButton" />
              </ButtonLink>
            ) : null}
          </Description>
        </Card>
      </ModalMain>
    </Modal>
  )
}
