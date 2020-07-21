import React from 'react';
import DefaultLayout from 'gatsby-theme-blog/src/components/layout';

import ConsentBanner from './consent-banner';

const Layout = props => (
  <>
    <DefaultLayout {...props} />
    <ConsentBanner />
  </>
);

export default Layout;
