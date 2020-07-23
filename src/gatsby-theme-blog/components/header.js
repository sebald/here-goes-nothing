import React from 'react';
import { Link } from 'gatsby';
import { css, Styled } from 'theme-ui';
import Bio from './bio-content';
import { ArrowBack } from './ui/icons';

// @ts-ignore
const rootPath = `${__PATH_PREFIX__}/`;

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          color: 'primary',
          fontSize: 6,
        })}
      >
        {children}
      </Styled.h1>
    );
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            display: 'flex',
            alignItems: 'center',
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
            fontSize: 3,
            fontFamily: 'heading',
          })}
          to={`/`}
        >
          <span
            css={css({
              lineHeight: 1,
              opacity: 0.5,
            })}
          >
            <ArrowBack size="20" />
          </span>{' '}
          {children}
        </Styled.a>
      </Styled.h3>
    );
  }
};

const Header = ({ children, title, ...props }) => (
  <header>
    <div
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        pt: 4,
      })}
    >
      <div
        css={css({
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        })}
      >
        <Title {...props}>{title}</Title>
        {children}
      </div>
      {props.location.pathname === rootPath && <Bio />}
    </div>
  </header>
);

export default Header;
