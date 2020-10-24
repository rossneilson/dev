const path = require(`path`)

module.exports = {
  siteMetadata: {
    en: {
      title: "Ross Neilson | Web Developer",
      description:
        "Freelance web developer in Glasgow, Scotland specialising in international complex dynamic web apps to improve small-medium businesses. Using javascript, react and gatsby.",
    },
    jp: {
      title: "ロス ニルソン ディベロッパー",
      description:
        "フリランスWebディベロッパー、国際的な中小企業向けの高品質で複雑なWebソリューションを専門フリーランスのWeb開発者",
    },
    blog: {
      en: {
        title: "Ross Neilson Web Development Blog",
        description:
          "Freelance web developer blog about technical issues, solutions, technologies and experiences. Javascript, gatsby, react.",
      },
      jp: {
        title: "ロス ニルソン ディベロッパー ブログ",
        description:
          "フリランスWebディベロッパー、国際的な中小企業向けの高品質で複雑なWebソリューションを専門フリーランスのWeb開発者のブログ",
      },
    },
    author: `Ross Neilson`,
    title: "Ross Neilson | Web Developer",
    description:
      "A freelance web developer in Glasgow, Scotland specialising in international complex dynamic web apps to improve small-medium businesses",

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
        languages: [`en`, `jp`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
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
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139306598-1",
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
  ],
}
