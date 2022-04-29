module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL 
        ? 'https://strapi-gatsb-pg-restaurant.herokuapp.com' 
        : `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`item`],
      },
    },
  ],
}
