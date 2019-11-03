const isDev = process.env.NODE_ENV === "development";

module.exports = {
  siteMetadata: {
    siteName: "SugarCube Tools",
    siteUrl: isDev ? "http://localhost:8000" : "https://sugarcubetools.net",
    description: "Documentation for the SugarCube based investigative toolset.",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.tsx'),
        },
        extensions: ['.mdx', '.md'],
        // workaround: https://github.com/gatsbyjs/gatsby/issues/16422#issuecomment-518985316
        plugins: [`gatsby-remark-autolink-headers`],
        // gatsbyRemarkPlugins: [
        //   `gatsby-remark-katex`,
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 1035,
        //     },
        //   },
        //   `gatsby-remark-autolink-headers`,
        //   {
        //     resolve: `gatsby-remark-prismjs`,
        //     options: {
        //       classPrefix: 'language-',
        //       inlineCodeMarker: null,
        //       showLineNumbers: true,
        //       noInlineHighlight: false,
        //     },
        //   },
        // ],
      },
    },
  ],
};
