/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for article nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

exports.onCreateWebpackConfig = ({
                                   actions,
                                   stage,
                                   plugins,
                                   getConfig
                                 }) => {
  // override config only during
  // production JS & CSS build
  if (stage === 'build-javascript') {
    // get current webpack config
    const config = getConfig()
    // our new cssnano options
    // are still based on default preset
    const options = {
      cssProcessorPluginOptions: {
        preset: ['default',
          {
            discardComments: {
              removeAll: true
            },
            calc: false,
            reduceTransforms: false,
            minifySelectors: false
          }]
      }
    }
    // find CSS minimizer
    const minifyCssIndex = config.optimization.minimizer.findIndex(
      minimizer => minimizer.constructor.name ===
        'OptimizeCssAssetsWebpackPlugin'
    )
    // if found, overwrite existing CSS minimizer with the new one
    if (minifyCssIndex > -1) {
      config.optimization.minimizer[minifyCssIndex] =
        plugins.minifyCss(options)
    }
    // replace webpack config with the modified object
    actions.replaceWebpackConfig(config)
  }
}

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.module.rules = [
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(
      rule => String(rule.test) !== String(/\.jsx?$/)
    ),
    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js()` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),
      test: /\.jsx?$/,
      // Exclude all node_modules from transpilation, except for 'swiper' and 'dom7'
      exclude: modulePath =>
        /node_modules/.test(modulePath) &&
        !/node_modules\/(swiper|dom7)/.test(modulePath),
    },
  ]
  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}



// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getDr = makeRequest(graphql, `
      {
          allStrapiAboutDrs {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each article.
    result.data.allStrapiAboutDrs.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/about-dr.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  const getServices = makeRequest(graphql, `
      {
          allStrapiServices {
              edges {
                  node {
                      slug
                  }
              }
          }
      }
  `).then(result => {
    // Create pages for each article.
    result.data.allStrapiServices.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/services.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  // Queries for articles and authors nodes to use in creating pages.
  return Promise.all([
    getDr,
    getServices,
  ])
};