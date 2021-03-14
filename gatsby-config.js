const path = require(`path`)

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    en: {
      title: "Ross Neilson | Web Developer",
      description:
        "Freelance web developer in Glasgow, Scotland specializing in international complex dynamic web apps to improve small-medium businesses. Using javascript, react and gatsby.",
    },
    ja: {
      title: "ロス ニルソン ウェブエンジニア",
      description:
        "フリランスWebエンジニア、国際的な中小企業向けの高品質で複雑なWebソリューションを専門フリーランスのWeb開発者",
    },
    blog: {
      en: {
        title: "Ross Neilson Web Development Blog",
        description:
          "Freelance web developer blog about technical issues, solutions, technologies and experiences. Javascript, gatsby, react.",
      },
      ja: {
        title: "ロス ニルソン ウェブエンジニア ブログ",
        description:
          "フリランスWebエンジニア、国際的な中小企業向けの高品質で複雑なWebソリューションを専門フリーランスのWeb開発者のブログ",
      },
    },
    author: `Ross Neilson`,
    title: "Ross Neilson | Web Developer",
    description:
      "A freelance web developer in Glasgow, Scotland specializing in international complex dynamic web apps to improve small-medium businesses",

    siteUrl: `https://www.rossneilson.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/src/markdown/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "portfolio",
        path: `${__dirname}/src/markdown/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ross Neilson - Developer`,
        short_name: `Ross Neilson`,
        start_url: `/`,
        background_color: `#2096f3c7`,
        theme_color: `#2096f3c7`,
        display: `standalone`,
        icon: `static/icon-512x512.png`,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `ja`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: ["Table of Contents", "目次", "「コナのコメント」"],
              tight: true,
              ordered: false,
              fromHeading: 1,
              toHeading: 10,
              className: "table-of-contents",
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139306598-1",
        anonymize: true,
        respectDNT: true,
        storage: "none",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-loadable-components-ssr",
    `gatsby-plugin-image`,
    `gatsby-plugin-scroll-reveal`,
  ],
}
