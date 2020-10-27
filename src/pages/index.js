import React from "react"
import { graphql } from "gatsby"

import "../index.css"

import SEO from "../components/seo"
import Title from "../components/title/Title"
import About from "../components/about/About"
import Portfolio from "../components/portfolio/Portfolio"
import Toggle from "../components/Toggle"
import BlogSection from "../components/blog/BlogSection"
import ServicesSection from "../components/services/ServicesSection"
import SignUp from "../components/contact/SignUp"
import Contact from "../components/contact/Contact"

export default function Main(props) {
  return (
    <div>
      <SEO
        title={
          props.data.site.siteMetadata[props.pageContext.intl.language].title
        }
        description={
          props.data.site.siteMetadata[props.pageContext.intl.language]
            .description
        }
        lang={props.pageContext.intl.language}
      />
      <Toggle language={props.pageContext.intl.language} />
      <Title />
      <About image={props.data.profileImage.childImageSharp.fluid} />
      <ServicesSection
        icon1={props.data.icon1.childImageSharp.fixed}
        icon2={props.data.icon2.childImageSharp.fixed}
        icon3={props.data.icon3.childImageSharp.fixed}
        icon4={props.data.icon4.childImageSharp.fixed}
        icon5={props.data.icon5.childImageSharp.fixed}
        icon6={props.data.icon6.childImageSharp.fixed}
      />
      <Portfolio sites={props.data.portfolioSites.edges} />
      <BlogSection
        language={props.pageContext.intl.language}
        posts={props.data.blogPosts.edges}
      />
      <SignUp language={props.pageContext.intl.language} />
      <Contact />
    </div>
  )
}

export const imageQuery = graphql`
  query getData($locale: String) {
    blogPosts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(/blog/)/" }
        frontmatter: { locale: { eq: $locale } }
      }
      sort: { fields: frontmatter___date, order: ASC }
      limit: 4
    ) {
      edges {
        node {
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
      }
    }
    portfolioSites: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(/portfolio/)/" }
        frontmatter: { locale: { eq: $locale } }
      }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            description
            link
            locale
            date
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
    profileImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    icon1: file(relativePath: { eq: "icon1.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    icon2: file(relativePath: { eq: "icon2.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    icon3: file(relativePath: { eq: "icon3.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    icon4: file(relativePath: { eq: "icon4.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    icon5: file(relativePath: { eq: "icon5.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    icon6: file(relativePath: { eq: "icon6.png" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        en {
          title
          description
        }
        jp {
          title
          description
        }
      }
    }
  }
`
