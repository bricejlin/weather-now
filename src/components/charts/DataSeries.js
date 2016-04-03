import React, { PropTypes } from 'react';
import Bar from './Bar';
import d3 from 'd3';

export default function DataSeries({
  data, height, width, color
}) {
  const yScale = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, height]);

  const xScale = d3.scale.ordinal()
    .domain(d3.range(data.length))
    .rangeRoundBands([0, width], 0.85);

  const bars = data.map((point, i) => (
    <Bar key={i}
         height={yScale(point)}
         width={xScale.rangeBand()}
         offset={xScale(i)}
         availableHeight={height}
         color={color} />
  ));

  return (
    <g>{bars}</g>
  );
}

DataSeries.propTypes = {
  data: PropTypes.array,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
