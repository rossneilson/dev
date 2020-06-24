import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import loadable from "@loadable/component"

import "../index.css"
import "typeface-sacramento"
import "typeface-space-mono"

import SEO from "../components/seo"
import Title from "../components/title/Title"
import About from "../components/about/About"
import Portfolio from "../components/portfolio/Portfolio"
import Toggle from "../components/Toggle"
import { changeLocale } from "gatsby-plugin-intl"

const Services = loadable(() => import("../components/services/Services"))
const Contact = loadable(() => import("../components/contact/Contact"))
// import Blog from "../components/blog/Blog"

const ToggleWrap = styled.section`
  position: fixed;
  z-index: 9998;
  margin: 15px;
  right: 0;
`

export default function Main(props) {
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

  return (
    <div>
      <SEO
        title={"Ross Neilson"}
        description={
          "A freelance web developer in Glasgow, Scotland specialising in international complex dynamic web apps to improve small-medium businesses"
        }
        lang={props.pageContext.intl.language}
      />
      <ToggleWrap>
        <Toggle checked={checked} changeLanguage={changeLanguage} />
      </ToggleWrap>

      <Title />
      <About image={props.data.profileImage.childImageSharp.fluid} />
      <Services />
      <Portfolio
        devSiteImage={props.data.devSiteImage.childImageSharp.fluid}
        tabiSiteImage={props.data.tabiSiteImage.childImageSharp.fluid}
      />
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
    tabiSiteImage: file(relativePath: { eq: "tabi.jpg" }) {
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
