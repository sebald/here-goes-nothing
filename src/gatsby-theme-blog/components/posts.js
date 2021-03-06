import React from 'react';
import Layout from 'gatsby-theme-blog/src/components/layout';
import SEO from 'gatsby-theme-blog/src/components/seo';
import PostList from 'gatsby-theme-blog/src/components/post-list';

const Posts = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="Home" />
    <main>
      <PostList posts={posts} />
    </main>
  </Layout>
);

export default Posts;
