import React from "react"
import { createUseStyles } from "react-jss"
import { graphql } from "gatsby"
import "../index.css"

import Title from "../components/title/Title"
import About from "../components/about/About"
import Services from "../components/services/Services"
import Portfolio from "../components/portfolio/Portfolio"
import Contact from "../components/contact/Contact"
// import Blog from "../components/blog/Blog"

const useStyles = createUseStyles({
  toggleWrap: {
    position: "fixed",
    zIndex: 99999,
    margin: "15px",
  },
})

export default function Main(props) {
  console.log(props)
  const classes = useStyles()

  return (
    <div>
      <Title />
      <About image={props.data.profileImage.childImageSharp.fluid} />
      <Services />
      <Portfolio examples={true} />
      {/* <Blog /> */}
      <Contact />
    </div>
  )
}

export const imageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
