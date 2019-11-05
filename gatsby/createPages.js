const replacePath = require('./utils')
const path = require('path')

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const Template = path.resolve("src/templates/Template.tsx");
  const TemplateSimple = path.resolve("src/templates/TemplateSimple.tsx")

  return graphql(`
    {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              title
              root
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMdx.edges.forEach(({ node }) => {
      console.log(node.fields.slug);
      createPage({
        path: replacePath(node.fields.slug),
        component: node.fields.slug.startsWith("/docs") ? Template : TemplateSimple,
        context: { id: node.id },
      })
    })
  })
}
