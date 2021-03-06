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
        name: 'rahat-chowdhury-portfolio',
        short_name: 'rahat_portfolio',
        start_url: '/',
        background_color: '#ffffff80',
        theme_color: '#ffffff80',
        display: 'minimal-ui',
        icon: 'src/assets/images/portfoliologo.png', // This path is relative to the root of the site.
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
        path: './data/',
      },
    },
    'gatsby-plugin-antd',
  ],
}
