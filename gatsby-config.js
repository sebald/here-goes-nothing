module.exports = {
  pathPrefix: '/here-goes-nothing',
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        webfontURL: 'https://fonts.googleapis.com/css2?family=Inter',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'xws',
        path: `${__dirname}/src/data/`,
        plugins: ['gatsby-transformer-json'],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'Here goes Nothing',
    author: 'Sebastian',
    description: '#learninpublic',
  },
};
