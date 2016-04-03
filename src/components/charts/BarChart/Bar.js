import React, { PropTypes} from 'react';

export default function Bar({
  color, width, height, offset, availableHeight
}) {
  return (
    <rect fill={color}
          width={width}
          height={height}
          x={offset}
          y={availableHeight - height} />
  );
}

Bar.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  offset: PropTypes.number,
  availableHeight: PropTypes.number
};
