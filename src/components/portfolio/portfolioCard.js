import React from "react"
import { createUseStyles } from "react-jss"
import Img from "gatsby-image"

const useStyles = createUseStyles({
  projectCard: {
    zIndex: "998",
    width: 400,
    height: "25%",
    margin: "1% 1% 5% 1%",
    flexGrow: "2",
    transition:
      "transform .6s ease,filter .6s ease,-webkit-transform .6s ease,-webkit-filter .6s ease",
    transitionDelay: "var(--wait,0)",
    willChange: "transform",
    backgroundColor: "#ffffffd2",
  },
  bar: {
    zIndex: "998",
    display: "flex",
    alignItems: "center",
    padding: 9,
    background: "hsl(0, 0%, 19%)",
  },
  dot: {
    marginRight: 4,
    width: 8,
    height: 8,
    background: "hsl(0, 0%, 67%)",
    borderRadius: "100%",
  },
  cardImage: {
    background:
      "linear-gradient(90deg, rgba(28,5,0,1) 0%, rgba(121,57,9,1) 36%, rgba(0,179,255,1) 100%)",
    fallbacks: [
      {
        background: "rgb(28,5,0)",
      },
    ],
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  projectImage: {
    width: "100%",
    height: "auto",
    minHeight: 200,
    transform: "scaleY(1.05)",
    transition: "all 1s ease-in-out",
    mozTransition: "all 1s ease-in-out",
  },
  "projectImage:hover": {
    transform: "scale(1.1)",
    opacity: "0.4",
  },
  projectText: {
    padding: "0px 20px 20px 20px",
    color: "#f2a319",
    minHeight: 110,
  },
})

export default function PortfolioCard(props) {
  const classes = useStyles()
  return (
    <div className="projectCard">
      <div className="bar">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="cardImage">
        <a href={props.link}>
          <Img styleName="projectImage" />
        </a>
      </div>

      <div className="projectText">
        <h4>{props.title}</h4>
        {props.t("portfolio." + props.title)}
      </div>
    </div>
  )
}
