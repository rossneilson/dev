import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

const Wrapper = styled.section`
  width: 95%;
  padding: 10px;
  padding-left: 20px;
  padding-bottom: 40px;
`

const Title = styled.h3`
  font-family: Space Mono;
  font-size: 110%;
  color: white;
  margin: 0;
  width: 100%;
`

const Percentage = styled.i`
  margin-left: ${props => props.percentage - 3} + %;
  margin-right: 15px;
  color: white;
`

const Bar = styled.section`
  display: flex;
  flex-wrap: wrap;
  height: 50px;
`

const Progress = styled.section`
  width: ${props => props.progress + "%"};
  background-color: rgb(245, 181, 72);
  border-radius: 20px 0px 0px 20px;
`

const Remainder = styled.section`
  width: ${props => props.remainder + "%"};
  background-color: rgba(184, 225, 255, 0.69);
  border-radius: 0px 20px 20px 0px;
`

export default function ProgressBar(props) {
  const start = new Date(2017, 8, 18)
  const end = new Date(2021, 11, 23)
  const today = new Date()

  const progress = Math.round(((today - start) / (end - start)) * 100)
  const remainder = 100 - progress

  return (
    <Wrapper>
      <Title>
        <FormattedMessage id="about.progress" />
      </Title>
      <Percentage percentage={progress}>{progress + "%"}</Percentage>
      <Bar>
        <Progress progress={progress} />
        <Remainder remainder={remainder} />
      </Bar>
    </Wrapper>
  )
}
