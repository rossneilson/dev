import React from "react"
import { createUseStyles } from "react-jss"
import cover from "../../images/cover.svg"

const useStyles = createUseStyles({
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background: "url(" + cover + ")",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    oBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundPosition: "left top",
    fallbacks: [
      {
        backgroundPosition: "center",
      },
    ],
  },
  contactCard: {
    backgroundColor: "white",
    padding: 5,
    zIndex: "998",
    minHeight: "20%",
    width: "40%",
    margin: "5% 1% 5% 1%",
    flexGrow: "2",
    fallbacks: [
      {
        padding: 16,
      },
    ],
    paddingBottom: 20,
    textAlign: "center",
    minWidth: 300,
  },
})

export default function Contact(props) {
  const classes = useStyles()
  return (
    <div className={classes.contact}>
      <div className={classes.contactCard}>Contact</div>
    </div>
  )
}
