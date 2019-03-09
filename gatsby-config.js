module.exports = {
  siteMetadata: {
    title: 'Rahat Chowdhury Portfolio',
    author: 'Rahat Chowdhury',
    description: 'A web development portfolio created with Gatsby.JS',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/'
      }
    }
  ],
}
