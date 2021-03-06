const path = require('path')

module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: 'Portfolio',
    description: `Portfolio`,
    author: `@smasiu`,
    siteUrl: `https://smasiu.github.io/portfolio/`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@pages': path.join(__dirname, 'src/pages'),
        '@styles': path.join(__dirname, 'src/styles'),
        '@components': path.join(__dirname, 'src/components'),
        '@icons': path.join(__dirname, 'src/icons'),
        '@common': path.join(__dirname, 'src/common'),
        '@global-state': path.join(__dirname, 'src/global-state'),
        '@hooks': path.join(__dirname, 'src/hooks')
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Comfortaa\:300,400,700`],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    }
  ]
}
