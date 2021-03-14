import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"
import { FormattedMessage } from "gatsby-plugin-intl"

import PostCard from "./PostCard"
import SvgPattern from "../svg/SvgPattern"
import { urlLocaleFormatting } from "../../utils/formatters"

const BlogFlexContainer = styled.section`
  background-color: ${props => props.theme.colors.secondary200};
  z-index: 7;
  max-width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding: 13px;
`

const FlexWrap = styled.section`
  z-index: 8;
  margin: auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
  height: 400px;
  width: 100%;
  padding: 10px;
  @media (pointer: coarse) {
    flex-direction: column;
    height: auto;
  }
`

const Heading = styled.h2`
  color: ${props => props.theme.colors.primary400};
  margin-left: 4%;
  font-size: ${props => props.theme.fontSizes.xl};
`

const StyledLink = styled(Link)`
  position: relative;
  z-index: 9;
`

export default function Blog({ posts, language }) {
  const postCards = []
  posts.map((value, index) => {
    postCards.push(
      <PostCard
        key={index}
        post={value}
        isfullpage={false}
        language={language}
      />
    )
  })

  return (
    <BlogFlexContainer>
      <SvgPattern type="squiggles" />
      <StyledLink
        to={urlLocaleFormatting(language, "/blog")}
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        <Heading>
          <svg
            style={{ transform: "translateY(10px)" }}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-notebook"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#4dabf5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
            <line x1="13" y1="8" x2="15" y2="8" />
            <line x1="13" y1="12" x2="15" y2="12" />
          </svg>
          <FormattedMessage id="blog.title" />
        </Heading>
      </StyledLink>
      <FlexWrap>{postCards}</FlexWrap>
    </BlogFlexContainer>
  )
}
