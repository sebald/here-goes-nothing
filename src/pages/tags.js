import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import SEO from 'gatsby-theme-blog/src/components/seo';
import kebabCase from 'lodash/kebabCase';

import Layout from '../gatsby-theme-blog/components/layout';

const Tags = ({
  data: {
    allBlogPost: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <Helmet title={title} />
    <SEO title="Home" />
    <main>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  </Layout>
);

export default Tags;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
