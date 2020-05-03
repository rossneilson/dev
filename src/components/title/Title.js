import React from "react"
import { createUseStyles } from "react-jss"
import cover from "../../images/cover.svg"

const useStyles = createUseStyles({
  bg: {
    animation: "4s ease-out 0s 1 fadeIn",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "url(" + cover + ") bottom right",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
    minHeight: "100vh",
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    oBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center left",
  },
  centerText: {
    fontFamily: "Sacramento",
    animation: "1.5s ease-out 0s 1 slideInFromBottom",
    backgroundColor: "#2196f3",
    padding: "5% 2% 5% 2%",
    width: "45%",
    minWidth: 200,
    boxShadow:
      "0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)",
  },
  title: {
    fontFamily: "Sacramento",
    borderBottom: "2px solid",
    borderBottomColor: "#fab601",
    paddingBottom: 6,
    color: "white",
  },
  subTitle: {
    fontFamily: "Sacramento",
    color: "white",
  },
})

function Title(props) {
  const classes = useStyles()
  return (
    <div>
      <div src={"../../images/cover.svg"} className={classes.bg}>
        <div className={classes.centerText}>
          <h1 className={classes.title}>Ross Neilson</h1>
          <h2 className={classes.subTitle}>Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Title
