const replacePath = require("./utils");
const path = require("path");

module.exports = exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const Template = path.resolve("src/templates/Template.tsx");
  const TemplateSimple = path.resolve("src/templates/TemplateSimple.tsx");

  const result = await graphql(`
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
  `);

  if (result.errors) return Promise.reject(result.errors);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: replacePath(node.fields.slug),
      component: node.fields.slug.startsWith("/sugarcube")
        ? Template
        : TemplateSimple,
      context: { id: node.id }
    });
  });
};
