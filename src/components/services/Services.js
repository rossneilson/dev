import React from "react"
import { createUseStyles } from "react-jss"
import SvgPattern from "../svg/SvgPattern"

const useStyles = createUseStyles({
  skillsFlexContainer: {
    backgroundColor: "#f2a31991",
    zIndex: "998",
    display: "flex",
    maxWidth: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  servicesCard: {
    padding: 16,
    backgroundColor: "white",
    height: "90%",
    zIndex: "998",
    width: "90%",
    margin: 15,
    marginTop: 30,
    marginBottom: 30,
    boxShadow:
      "4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)",
  },
})

export default function About(props) {
  const classes = useStyles()
  return (
    <div className={classes.skillsFlexContainer}>
      <SvgPattern type="circle" />
      <div className={classes.servicesCard}>Services</div>
    </div>
  )
}
