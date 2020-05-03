import React from "react"
import { createUseStyles } from "react-jss"
import SvgPattern from "../svg/SvgPattern"
// import ProjectCard from "./portfolioCard"

const useStyles = createUseStyles({
  blogFlexContainer: {
    backgroundColor: "#f2a31991",
    zIndex: "998",
    display: "flex",
    flexDirection: "column",
    maxWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    padding: 13,
  },
})
// Use magic graph ql to generate blog posts
export default function Blog(props) {
  const classes = useStyles()
  return (
    <div className={classes.blogFlexContainer}>
      <SvgPattern type="squiggles" />
      <h3
        style={{
          color: "white",
          marginLeft: "100px",
          marginRight: "80%",
          paddingBottom: "0",
          zIndex: "998",
          maxWidth: "100px",
          borderColor: "#76aed7",
          paddingLeft: "4px",
        }}
      >
        Blog
      </h3>
    </div>
  )
}
