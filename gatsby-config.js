const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    description: `Portfolio`,
    author: `@smasiu`
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
        '@types': path.join(__dirname, 'src/types'),
        '@common': path.join(__dirname, 'src/common'),
        '@global-state': path.join(__dirname, 'src/global-state')
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
