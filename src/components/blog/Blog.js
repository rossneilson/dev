import React from "react"
import styled from "styled-components"
import SvgPattern from "../svg/SvgPattern"

const BlogFlexContainer = styled.section`
  background-color: #f2a31991;
  z-index: 998;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  padding: 13;
`

const Title = styled.h3`
  color: white;
  margin-left: 100px;
  margin-right: 80%;
  padding-bottom: 0;
  z-index: 998;
  max-width: 100px;
  border-color: #76aed7;
  padding-left: 4px;
`

// Use magic graph ql to generate blog posts
export default function Blog(props) {
  const classes = useStyles()
  return (
    <BlogFlexContainer>
      <SvgPattern type="squiggles" />
      <Title>Blog</Title>
    </BlogFlexContainer>
  )
}
