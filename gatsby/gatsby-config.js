module.exports = {
  siteMetadata: {
    title: `Peter Lin`,
    description: `A website to showcase my career.`,
    author: `plin0009@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cards`,
        path: `${__dirname}/src/images/cards`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Peter Lin`,
        short_name: `Peter Lin`,
        start_url: `/`,
        background_color: `#f9f8eb`,
        theme_color: `#664131`,
        display: `standalone`,
        icon: `src/images/icon-512.png`,/* 
        icons: [
          {
            src: '/src/images/icon-192.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: '/src/images/icon-512.png',
            type: 'image/png',
            sizes: '512x512'
          }
        ] */
      },
    },
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
