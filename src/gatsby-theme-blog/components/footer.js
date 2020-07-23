import React from 'react';
import { Link } from 'gatsby';
import { Styled, css } from 'theme-ui';

const Footer = () => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
      fontSize: 1,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    <> / </>
    <Styled.a as={Link} to="/legal-notice">
      Legal Notice
    </Styled.a>
    <> / </>
    <Styled.a
      href="https://github.com/sebald/here-goes-nothing"
      target="_blank"
      rel="noopener noreferrer"
    >
      Site Source
    </Styled.a>
  </footer>
);

export default Footer;
