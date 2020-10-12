import React from "react"
import styled from "styled-components"

import PostCard from "./PostCard"

const GridWrap = styled.section`
  margin: auto;
  margin-top: 50px;
  margin-bottom: 100px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  column-gap: 5%;
  row-gap: 50px;
  transition: all 1s;
  grid-auto-flow: dense;
`

export default function Grid({ posts }) {
  const postCards = []

  posts.map((value, index) => {
    postCards.push(<PostCard index={index} post={value} isfullpage />)
  })

  return <GridWrap>{postCards}</GridWrap>
}
