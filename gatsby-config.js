const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    siteName: "SugarCube Tools",
    siteUrl: isDev ? "http://localhost:8000" : "https://sugarcubetools.net",
    description: "Documentation for the Sugarcube based investigative toolset."
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content`
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.tsx")
        },
        extensions: [".mdx", ".md"],
        // workaround: https://github.com/gatsbyjs/gatsby/issues/16422#issuecomment-518985316
        plugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-images",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-table-of-contents"
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              fromHeading: 2,
              toHeading: 3
            }
          }
        ]
      }
    }
  ]
};
