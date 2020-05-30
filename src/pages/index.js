import React, { useState } from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import "../index.css"

import Title from "../components/title/Title"
import About from "../components/about/About"
import Services from "../components/services/Services"
import Portfolio from "../components/portfolio/Portfolio"
import Contact from "../components/contact/Contact"
import Toggle from "../components/Toggle"
import { changeLocale } from "gatsby-plugin-intl"
// import Blog from "../components/blog/Blog"

// TODO Stop animation when changing language
const slideInFromRight = keyframes`
  0% {
    transform: translateX(200%);
  }
  15% {
    transform: translateX(-10%);
  }
  20% {
    transform: translateX(0);
  }
  90% {
    transform: translateX(0);
  }
  93% {
    transform: translateX(-10%);
  }
  96% {
    transform: translateX(+20%);
  }
  100%{
    transform: translateX(0);
  }
`

const ToggleWrap = styled.section`
  ${"" /* animation: 6s ease-out 0s 1 ${slideInFromRight}; */}
  position: fixed;
  z-index: 9998;
  margin: 15px;
  right: 0;
`

export default function Main(props) {
  console.log(props)

  const checkLanguage = () => {
    if (props.pageContext.intl.language === "jp") {
      return true
    } else if (props.pageContext.intl.language === "en") {
      return false
    }
  }

  const [checked, setChecked] = useState(checkLanguage())

  const changeLanguage = async e => {
    setChecked(!checked)
    await new Promise(r => setTimeout(r, 1))
    if (checked) {
      changeLocale("en")
    } else {
      changeLocale("jp")
    }
  }
  console.log("index image")
  console.log(props.data.devSiteImage.childImageSharp.fluid)

  return (
    <div>
      <ToggleWrap>
        <Toggle checked={checked} changeLanguage={changeLanguage} />
      </ToggleWrap>

      <Title />
      <About image={props.data.profileImage.childImageSharp.fluid} />
      <Services />
      <Portfolio devSiteImage={props.data.devSiteImage.childImageSharp.fluid} />
      {/* <Blog /> */}
      <Contact />
    </div>
  )
}

export const imageQuery = graphql`
  query {
    profileImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    devSiteImage: file(relativePath: { eq: "dev.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
