const path = require('path');
import kebabCase from 'lodash/kebabCase';

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve('src/templates/tags.js');

  const result = await graphql(`
    {
      tagsGroup: allBlogPost(limit: 2000) {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
