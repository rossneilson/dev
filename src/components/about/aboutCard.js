import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  card: {
    padding: 16,
    backgroundColor: "white",
    zIndex: "998",
    width: "50%",
    minHeight: "40%",
    minWidth: "275",
    margin: "30px 20px 5% 20px",
    left: "6%",
    flexGrow: "2",
    boxShadow:
      "4px 10px 8px 0 rgba(0, 0, 0, 0.4), 0 3px 5px 0 rgba(0, 0, 0, 0.4)",
  },
})

export default function AboutCard(props) {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <h3>A little about me</h3>
      <p>
        Hi, I am a software developer with a passion for learning, creating and
        travel. So far I have 2 years of experience developing software in a
        proffesional enviroment and over half of my life doing it as a hobby.
        Currently I'm employed at JP Morgan and am working towards finishing my
        BSc (Hons) Software development for Business.
      </p>
      <p>
        My passion is learning; be it a new javascript framework or improving my
        Japanese ability. I have experience across many tech stacks;
        transforming large scale monolithic applications into well architected
        efficient microservices all the way to creating responsive, intuitive
        web applications and sites from scratch. I am born and raised in
        Scotland, however currently am working towards pursuing a freelance web
        development career in Japan after I graduate.
      </p>
      <p>I hope I can work with you at some point :)</p>
    </div>
  )
}
