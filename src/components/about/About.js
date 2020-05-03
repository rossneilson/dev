import React from "react"
import { createUseStyles } from "react-jss"
import Img from "gatsby-image"

import AboutCard from "./aboutCard"
import ProgressBar from "./progressBar"
import SvgPattern from "../svg/SvgPattern"

const useStyles = createUseStyles({
  aboutFlexContainer: {
    backgroundColor: "#76aed7",
    zIndex: "998",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rightWrapper: {
    zIndex: "998",
    margin: "auto",
    paddingTop: 20,
    maxWidth: "100%",
    maxHeight: 900,
  },
  profile: {
    zIndex: "998",
    margin: "auto",
    transform: "scale(0.95)",
    maxWidth: "100%",
    maxHeight: 700,
  },
})

export default function About(props) {
  const classes = useStyles()
  return (
    <div className={classes.aboutFlexContainer}>
      <SvgPattern type="metal" />
      <AboutCard />
      <div className={classes.rightWrapper}>
        <Img className={classes.profile} fluid={props.image} />
        <ProgressBar />
      </div>
    </div>
  )
}
