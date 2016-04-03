import React, { PropTypes } from 'react';

export default function Chart({
  width, height, children
}) {
  return (
    <svg width={width}
         height={height}>
      {children}
    </svg>
  );
}

Chart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.element
};
