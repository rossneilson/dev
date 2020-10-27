import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { navigate } from "@reach/router"
import { FormattedMessage } from "gatsby-plugin-intl"

import "../index.css"
import "fontsource-sacramento"

import Navigation from "../components/blog/Navigation"
import Footer from "../components/blog/Footer"
import SignUp from "../components/contact/SignUp"
import SEO from "../components/seo"

const BackIcon = styled.section`
  cursor: pointer;
  color: white !important;
  z-index: 99999999;
  position: absolute;
  padding: 10px;
  display: flex;
  margin-top: 10px;
`

const BackText = styled.section`
  margin-top: 5px;
  @media (pointer: coarse) {
    display: none !important;
  }
`

const BackgroundImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2;
  height: 100vh;
`

const Nav = styled(Navigation)`
  color: white !important;
`

const Gradient = styled.section`
  background: rgb(0, 0, 0);
  background: ${props =>
    "linear-gradient( 0deg,rgb(255 255 255) 0%,rgb(255 255 255 / " +
    props.offset +
    "%)" +
    props.offset +
    "%,rgb(0 0 0 / 45%) 65%,rgb(0 0 0 / 85%) 100%)"};
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
`

const Category = styled.section`
  font-size: 10px;
  background-color: #ffffffb0;
  padding: 4px;
  justify-content: center;
  display: flex;
  border-radius: 7px;
  width: 100px;
  color: black;
  margin: 10px;
  text-shadow: none;
  margin-left: 25%;
  margin-top: 40px;
  @media (pointer: coarse) {
    margin-left: 10%;
  }
`

const Title = styled.h1`
  color: white;
  margin-left: 25%;
  margin-right: 25%;
  margin-top: 2%;
  @media (pointer: coarse) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

const Location = styled.h2`
  color: white;
  margin-left: 25%;
  margin-right: 25%;
  @media (pointer: coarse) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

const FormattedDate = styled.h4`
  color: white;
  margin-left: 25%;
  margin-right: 25%;
  @media (pointer: coarse) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

const Markdown = styled.section`
  font-size: medium;
  color: black;
  line-height: 2;
  letter-spacing: 0.5px;
  background-color: white;
  padding: 2%;
  border-radius: 10px;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 5%;
  @media (pointer: coarse) {
    margin-left: 3%;
    margin-right: 3%;
    padding: 5%;
  }
`

export default function BlogPost({ data, pageContext }) {
  const [offset, setOffset] = useState(10)

  const listener = e => {
    if (!(window.pageYOffset > 900)) {
      setOffset(window.pageYOffset * 0.15 + 10)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  const { frontmatter, html } = data.posts
  const { language } = pageContext

  return (
    <div>
      <SEO
        title={frontmatter.title + " | Ross Neilson"}
        description={frontmatter.SEO}
        lang={frontmatter.locale}
        slug={"/" + frontmatter.path}
      />
      <BackgroundImage
        loading="eager"
        fluid={frontmatter.image.childImageSharp.fluid}
      />
      <Gradient offset={offset} />
      <BackIcon
        onClick={() => navigate("../../" + frontmatter.locale + "/blog")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-back-up"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
        </svg>
        <BackText>
          <FormattedMessage id="blog.back" />
        </BackText>
      </BackIcon>

      <Nav colour={"white"} language={pageContext.intl.language} />
      <Category>{frontmatter.category}</Category>
      <Title>{frontmatter.title}</Title>
      <Location>{frontmatter.location}</Location>
      <FormattedDate>
        {new Intl.DateTimeFormat(language === "en" ? "en-GB" : "ja-JP", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }).format(new Date(frontmatter.date))}
      </FormattedDate>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      <SignUp language={pageContext.intl.language} />
      <Footer image={data.image.childImageSharp.fluid} />
    </div>
  )
}

export const query = graphql`
  query Posts($slug: String, $locale: String) {
    posts: markdownRemark(
      fileAbsolutePath: { regex: "/(/blog/)/" }
      frontmatter: { path: { eq: $slug }, locale: { eq: $locale } }
    ) {
      html
      frontmatter {
        path
        locale
        title
        location
        category
        date
        SEO
        image {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    image: file(relativePath: { eq: "footerImage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
