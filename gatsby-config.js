module.exports = {
  pathPrefix: '/here-goes-nothing',
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        webfontURL: 'https://fonts.googleapis.com/css2?family=Inter',
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: 'Here goes Nothing',
    author: 'Sebastian',
    description: '#learninpublic',
    social: [
      {
        name: 'github',
        url: 'https://github.com/sebald',
      },
    ],
  },
};
