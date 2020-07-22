import React from 'react';
import { useThemeUI } from 'theme-ui';
import CookieConsent from 'react-cookie-consent';

export const ConsentBanner = () => {
  const { theme } = useThemeUI();
  const { space, colors } = theme;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept 🍪"
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
        fontSize: 'inherit',
        background: colors.primary,
        padding: `${space[2]}px ${space[4]}px`,
      }}
    >
      This site doesn't use any cookies to track you but embeds third party
      content which does (Twitch).
    </CookieConsent>
  );
};
