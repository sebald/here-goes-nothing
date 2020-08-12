import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../gatsby-theme-blog/components/layout';

export const pageQuery = graphql`
  query($tag: String) {
    allBlogPost(
      limit: 2000
      sort: { fields: [date], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;

const Tags = ({ pageContext, data, location, siteTitle }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allBlogPost;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  console.log(edges);
  return (
    <Layout location={location} title={siteTitle}>
      <main>
        <h1>{tagHeader}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { slug, title } = node;
            return (
              <li key={slug}>
                <Link to={slug}>{title}</Link>
              </li>
            );
          })}
        </ul>
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/tags">All tags</Link>
      </main>
    </Layout>
  );
};

export default Tags;
