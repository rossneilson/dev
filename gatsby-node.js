const path = require("path")

// pages locale
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  return graphql(
    `
      query MyQuery {
        blog: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/(/blog/)/" } }
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Blog posts
    result.data.blog.edges.forEach(edge => {
      const path = edge.node.frontmatter.path

      createPage({
        path: path,
        component: BlogPostTemplate,
        context: {
          slug: path,
        },
      })
    })
  })
}
