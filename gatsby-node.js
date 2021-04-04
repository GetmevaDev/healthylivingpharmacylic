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