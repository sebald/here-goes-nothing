import React from 'react';
import { useThemeUI } from 'theme-ui';

import CookieConsent from 'react-cookie-consent';
import DefaultLayout from 'gatsby-theme-blog/src/components/layout';

const Layout = props => {
  const { theme } = useThemeUI();
  const { space, colors } = theme;

  return (
    <>
      <DefaultLayout {...props} />
      <CookieConsent
        location="bottom"
        buttonText="Yup!"
        declineButtonText="Decline"
        cookieName="constent-cookie"
        style={{
          background: colors.highlight,
          color: colors.text,
        }}
        contentStyle={{
          margin: `${space[3]}px 0 ${space[3]}px ${space[4]}px`,
        }}
        buttonStyle={{
          color: colors.white,
          background: colors.primary,
          padding: `${space[2]}px ${space[4]}px`,
        }}
      >
        This site doesn't use any cookies to track you.
      </CookieConsent>
    </>
  );
};
export default Layout;
