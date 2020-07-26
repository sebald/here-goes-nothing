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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-172817388-1',
          cookieName: 'hgn-google-analytics',
          anonymize: true,
        },
      },
    },
  ],
  siteMetadata: {
    title: 'Here goes Nothing',
    author: 'Sebastian',
    description:
      'A blog about failing to move plastic space ships around the table.',
  },
};
