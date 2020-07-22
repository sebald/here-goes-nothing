import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import DefaultLayout from 'gatsby-theme-blog/src/components/layout';

import { ConsentBanner, XWS } from './ui';

const shortcodes = { XWS };

const Layout = props => (
  <MDXProvider components={shortcodes}>
    <DefaultLayout {...props} />
    <ConsentBanner />
  </MDXProvider>
);

export default Layout;
