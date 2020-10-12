import React from "react"
import styled from "styled-components"

const Pattern = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: ${props => (props.fullPage ? "visible !important" : "hidden")};
`

const Rectangle = styled.rect`
  position: absolute;
  height: 999999%;
  fill: url(${props => "#" + props.type});
`

export default function SvgPattern({ type, fullPage = false }) {
  var pattern
  switch (type) {
    case "circle":
      pattern = (
        <circle
          cx="10"
          cy="10"
          r="1"
          fill="rgba(0,0,0,0.3)"
          stroke="#343434"
          strokeWidth="0"
          x="0"
          y="0"
          width="300000"
          height="30000"
        />
      )
      break
    case "metal":
      pattern = (
        <path
          d="M 5,5l10,10M15,5l10,-10
          M5,15l-10,10M15,25l10,-10
          M-5,5l10,-10"
          fill="transparent"
          strokeWidth="1"
          shapeRendering="auto"
          stroke="rgba(0,0,0,0.1)"
          strokeLinecap="square"
        />
      )
      break
    case "point":
      pattern = (
        <path
          d="M 5,15l5,-10l5,10"
          fill="transparent"
          strokeWidth="1"
          shapeRendering="auto"
          stroke="rgba(0,0,0,0.08)"
          strokeLinecap="square"
        />
      )
      break
    case "squiggles":
      pattern = (
        <path
          d="M 0 7.5 l 7.5 0 l 0 -7.5 M 22.5 30 l 0 -7.5
      l 7.5 0 M 7.5 15 l 0 7.5 l 7.5 0 M 15 7.5
      l 7.5 0 l 0 7.5"
          fill="transparent"
          strokeWidth="1"
          shapeRendering="auto"
          stroke="rgba(0,0,0,0.06)"
          strokeLinecap="square"
        />
      )
      break
    default:
      throw new Error("Please specify pattern type")
  }
  return (
    <Pattern fullPage={fullPage}>
      <defs>
        <pattern id={type} patternUnits="userSpaceOnUse" width="20" height="20">
          {pattern}
        </pattern>
      </defs>
      <Rectangle type={type} x="0" y="0" width="300000" height="30000" />
    </Pattern>
  )
}
