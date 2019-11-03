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
        path: `${__dirname}/docs`,
      },
    },
    "gatsby-transformer-remark",
  ],
};
