import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import * as Sentry from "@sentry/react"

function SEO({ description, lang, meta, title, slug = "" }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description
    ? description
    : site.siteMetadata.description

  Sentry.init({
    dsn:
      "https://4a543b15327e4f539713ff1b337e8ce2@o425302.ingest.sentry.io/5501469",
  })

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        rel="alternate"
        hrefLang="en"
        href={"https://rossneilson.dev/en" + slug}
      />
      <link
        rel="alternate"
        hrefLang="ja"
        href={"https://rossneilson.dev/ja" + slug}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={"https://rossneilson.dev" + slug}
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
