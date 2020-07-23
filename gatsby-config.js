module.exports = {
  pathPrefix: '/here-goes-nothing',
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        webfontURL:
          'https://fonts.googleapis.com/css2?family=Inter&family=Raleway:wght@700;900',
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
