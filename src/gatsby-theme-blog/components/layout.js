import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import DefaultLayout from 'gatsby-theme-blog/src/components/layout';

import { ConsentBanner, XWS } from './ui';
import Footer from './footer';

const shortcodes = { XWS };

const { NODE_ENV } = process.env;

const Layout = ({ children, ...props }) => (
  <MDXProvider components={shortcodes}>
    <DefaultLayout {...props}>
      {children}
      <Footer />
    </DefaultLayout>
    {NODE_ENV === 'production' && <ConsentBanner />}
  </MDXProvider>
);

export default Layout;
