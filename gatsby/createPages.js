const replacePath = require("./utils");
const path = require("path");

module.exports = exports.createPages = async ({actions, graphql}) => {
  const {createPage, createRedirect} = actions;

  const Template = path.resolve("src/templates/template.tsx");
  const TemplateSimple = path.resolve("src/templates/template-simple.tsx");

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

  result.data.allMdx.edges.forEach(({node}) => {
    const hasSidebar =
      node.fields.slug.startsWith("/sugarcube") ||
      node.fields.slug.startsWith("/ncube");

    createPage({
      path: replacePath(node.fields.slug),
      component: hasSidebar ? Template : TemplateSimple,
      context: {id: node.id},
    });
  });

  createRedirect({
    fromPath: "/sugarcube",
    toPath: "/sugarcube/about",
    redirectInBrowser: true,
    isPermanent: false,
  });

  createRedirect({
    fromPath: "/ncube",
    toPath: "/ncube/about",
    redirectInBrowser: true,
    isPermanent: false,
  });

  createRedirect({
    fromPath: "/discovery",
    toPath: "/discovery/about",
    redirectInBrowser: true,
    isPermanent: false,
  });
};
