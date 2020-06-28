const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Web Developer`,
    description: `A freelance web developer in Glasgow, Scotland specialising in international complex dynamic web apps to improve small-medium businesses`,
    author: `Ross Neilson`,
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
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139306598-1",
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-loadable-components-ssr",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
  ],
}
