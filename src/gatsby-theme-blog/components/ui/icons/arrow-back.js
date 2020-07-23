import * as React from 'react';

/**
 * @param {*} props
 */
export const ArrowBack = ({ size = 24, props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} {...props}>
    <path
      fill="currentColor"
      d="M13.83 19a1 1 0 01-.78-.37l-4.83-6a1 1 0 010-1.27l5-6a1 1 0 011.54 1.28L10.29 12l4.32 5.36a1 1 0 01-.78 1.64z"
      data-name="arrow-ios-back"
    />
  </svg>
);
