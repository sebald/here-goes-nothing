import React from 'react';
import { css } from 'theme-ui';

export default function Bio() {
  return (
    <span
      css={css({
        color: 'grey',
        fontSize: 1,
        fontStyle: 'italic',
      })}
    >
      A blog about failing to move plastic space ships around the table.
    </span>
  );
}

/*
<span>
Photo by{' '}
<a href="https://unsplash.com/@danielkcheung?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
  Daniel Cheung
</a>{' '}
on{' '}
<a href="https://unsplash.com/s/photos/star-wars-lego?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
  Unsplash
</a>
</span>
*/
