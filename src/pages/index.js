import React from "react"
import { graphql } from "gatsby"
import "@fontsource/sacramento"

import SEO from "../components/seo"
import Title from "../components/title/Title"
import About from "../components/about/About"
import Portfolio from "../components/portfolio/Portfolio"
import Toggle from "../components/Toggle"
import ContactCTA from "../components/ContactCTA"
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
      <ContactCTA />
      <Title />
      <About image={props.data.profileImage} />
      <ServicesSection
        icons={{
          icon1: props.data.icon1,
          icon2: props.data.icon2,
          icon3: props.data.icon3,
          icon4: props.data.icon4,
          icon5: props.data.icon5,
          icon6: props.data.icon6,
          discount: props.data.discount,
        }}
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
      sort: { fields: frontmatter___date, order: DESC }
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
                gatsbyImageData(
                  width: 3000
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
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
      sort: { fields: frontmatter___date, order: DESC }
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
            images {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  layout: CONSTRAINED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
    profileImage: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    icon1: file(relativePath: { eq: "icon1.png" }) {
      childImageSharp {
        gatsbyImageData(width: 50, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    icon2: file(relativePath: { eq: "icon2.png" }) {
      childImageSharp {
        gatsbyImageData(width: 50, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    icon3: file(relativePath: { eq: "icon3.png" }) {
      childImageSharp {
        gatsbyImageData(width: 50, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    icon4: file(relativePath: { eq: "icon4.png" }) {
      childImageSharp {
        gatsbyImageData(width: 50, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    icon5: file(relativePath: { eq: "icon5.png" }) {
      childImageSharp {
        gatsbyImageData(width: 50, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    icon6: file(relativePath: { eq: "icon6.png" }) {
      childImageSharp {
        gatsbyImageData(width: 50, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    discount: file(relativePath: { eq: "discount 1.png" }) {
      childImageSharp {
        gatsbyImageData(width: 75, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    site {
      siteMetadata {
        en {
          title
          description
        }
        ja {
          title
          description
        }
      }
    }
  }
`
