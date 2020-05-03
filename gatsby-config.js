const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
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
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.ico`,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
