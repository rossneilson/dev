const path = require(`path`)

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    en: {
      title: "Ross Neilson | Web Developer",
      description: "Web3 developer and PM from Scotland.",
    },
    ja: {
      title: "ロス ニルソン ウェブエンジニア",
      description: "Web3エンジニアとPM",
    },
    blog: {
      en: {
        title: "Ross Neilson Web Development Blog",
        description:
          "Web development blog about technical issues, solutions, technologies and experiences. Javascript, ethereum, blockchain, gatsby, react.",
      },
      ja: {
        title: "ロス ニルソン ウェブエンジニア ブログ",
        description:
          "Webエンジニア、react、node、javascript、イーサリアムWeb開発のブログ",
      },
    },
    author: `Ross Neilson`,
    title: "Ross Neilson | Web Developer",
    description: "Web3 developer and PM from Scotland.",

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
