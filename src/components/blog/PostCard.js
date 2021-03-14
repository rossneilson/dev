import React from "react"
import styled from "styled-components"
import { GatsbyImage as Img, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby-plugin-intl"

import { urlLocaleFormatting } from "../../utils/formatters"

const Wrapper = styled(Link)`
  width: 100%;
  z-index: 9;
  max-width: ${props => (props.isfullpage ? "null" : "380px")};
  overflow: visible;
  transition: all 0.3s;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  margin: 0% 2.5% 0% 2.5%;
  box-shadow: 0px 0px 15px 1px #0000003c;
  &:hover {
    box-shadow: 0px 0px 20px 9px #0000003c;
    transform: translateY(-5px);
  }
  &:focus {
    box-shadow: 0px 0px 20px 9px #0000003c;
    transform: translateY(-5px);
  }
  @media (pointer: coarse) {
    margin: 0% 2.5% 5% 2.5%;
    width: auto;
  }
  @media (min-width: 480px) {
    &:first-child {
      ${props =>
        props.isfullpage
          ? "grid-area: 1 / 1 / span 2 / span 2"
          : "grid-area: 1 / 1 / span 1 / span 1"}
    }
  }
`
const Title = styled.h2`
  margin: 5px 0px;
  color: ${props => props.theme.colors.primary700};
`

const Image = styled(Img)`
  height: 45%;
  z-index: -1;
  @media (pointer: coarse) {
    height: 35%;
  }
`

const Category = styled.section`
  font-size: 10px;
  background-color: ${props => props.theme.colors.primary200};
  padding: 3px;
  justify-content: center;
  display: flex;
  border-radius: 7px;
  width: 100px;
  color: black;
  position: absolute;
  margin: 10px;
  text-shadow: none;
`

const Description = styled.section`
  padding: 0px 20px;
  color: ${props => props.theme.colors.primary700};
`

const Extra = styled.section`
  @media (pointer: coarse) {
    display: none;
  }
`

const OpenFab = styled.section`
  float: right;
  background-color: ${props => props.theme.colors.primary400};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px -5px #00000061;
`

export default function PostCard({ post, index, isfullpage, language }) {
  const { frontmatter } = post.node
  const imageData = getImage(frontmatter.image)
  var desc = null

  if (index === 0 && isfullpage) {
    desc = (
      <Extra>
        <h4>{frontmatter.SEO}</h4>
      </Extra>
    )
  }

  return (
    <Wrapper
      data-sal="slide-up"
      isfullpage={isfullpage}
      to={urlLocaleFormatting(frontmatter.locale, "/" + frontmatter.path)}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    >
      <Category>{frontmatter.category}</Category>
      <Image image={imageData} />
      <Description>
        <Title>{frontmatter.title}</Title>
        {desc}
        {new Intl.DateTimeFormat(
          frontmatter.locale === "en" ? "en-GB" : "ja-JP",
          {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }
        ).format(new Date(frontmatter.date))}
        <OpenFab color="primary" aria-label="open">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </OpenFab>
      </Description>
    </Wrapper>
  )
}
