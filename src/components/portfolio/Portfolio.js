import React from "react"
import { createUseStyles } from "react-jss"
import SvgPattern from "../svg/SvgPattern"
// import ProjectCard from "./portfolioCard"

const useStyles = createUseStyles({
  portfolioFlexContainer: {
    backgroundColor: "#76aed7",
    zIndex: "998",
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    padding: 13,
  },
})
// TODO: Use magic graph ql to generate portfolio cards
// TODO: Popout when card clicked showing description (Problem, solution, result, etc) and slide show of site
export default function About(props) {
  const classes = useStyles()
  return (
    <div className={classes.portfolioFlexContainer}>
      <SvgPattern type="point" />
      <h3
        style={{
          color: "white",
          marginLeft: "100px",
          marginRight: "80%",
          paddingBottom: "0",
          zIndex: "998",
          minWidth: "150px",
          paddingLeft: "4px",
        }}
      >
        Portfolio
      </h3>
      {/* 
      <ProjectCard
        t={t}
        title="Personal Site"
        desc="Project number 1"
        link="https://rossneilson.dev"
      />
      <ProjectCard
        t={t}
        title="Work in progress"
        desc="Project number 2"
        link=""
      />
      <ProjectCard
        t={t}
        title="Work in progress"
        desc="Project number 3"
        link=""
      /> */}
    </div>
  )
}
