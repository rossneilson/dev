import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  progressBar: {
    width: "90%",
    padding: 10,
    paddingLeft: 20,
    paddingBottom: 40,
  },
  wholeBar: {
    display: "flex",
    flexWrap: "wrap",
    height: 50,
  },
})

export default function ProgressBar(props) {
  const classes = useStyles()
  const start = new Date(2017, 8, 18)
  const end = new Date(2021, 8, 1)
  const today = new Date()

  const progress = Math.round(((today - start) / (end - start)) * 100)
  const remainder = 100 - progress

  return (
    <div className={classes.progressBar}>
      <h3 style={{ color: "white", margin: 0, width: "100%" }}>
        Progress through apprenticeship
      </h3>
      <i
        style={{
          marginLeft: progress - 3 + "%",
          marginRight: "15px",
          color: "white",
        }}
      >
        {progress + "%"}
      </i>
      <div className={classes.wholeBar}>
        <div
          style={{
            width: progress + "%",
            backgroundColor: "rgb(245, 181, 72)",
            borderRadius: "20px 0px 0px 20px",
          }}
        />
        <div
          style={{
            width: remainder + "%",
            backgroundColor: "rgba(184, 225, 255, 0.69)",
            borderRadius: "0px 20px 20px 0px",
          }}
        />
      </div>
    </div>
  )
}
