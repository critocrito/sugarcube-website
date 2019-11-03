// exports.createPages = async ({actions: {createPage}, graphql}) => {
//   const mdDocument = require.resolve("./src/templates/markdown-document.tsx");
//   const pluginDetails = require.resolve("./src/templates/plugin-details.tsx");

//   return Promise.all([
//     graphql(`
//       {
//         allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/[^plugins]/"}}) {
//           edges {
//             node {
//               frontmatter {
//                 path
//               }
//             }
//           }
//         }
//       }
//     `).then((result) => {
//       if (result.errors) {
//         return Promise.reject(result.errors);
//       }

//       result.data.allMarkdownRemark.edges.forEach(({node}) => {
//         createPage({
//           path: node.frontmatter.path,
//           component: mdDocument,
//           context: {},
//         });
//       });
//     }),
//     graphql(`
//       {
//         allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/plugins/"}}) {
//           totalCount
//           edges {
//             node {
//               id
//               html
//               frontmatter {
//                 path
//                 title
//               }
//               excerpt
//             }
//           }
//         }
//       }
//     `).then((result) => {
//       if (result.errors) {
//         return Promise.reject(result.errors);
//       }

//       result.data.allMarkdownRemark.edges.forEach(({node}) => {
//         createPage({
//           path: node.frontmatter.path,
//           component: pluginDetails,
//           context: {},
//         });
//       });
//     }),
//   ]);
// };

module.exports = {
  createPages: require('./gatsby/createPages'),
  onCreateNode: require('./gatsby/onCreateNode'),
}
