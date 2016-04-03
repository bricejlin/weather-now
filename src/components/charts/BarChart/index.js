import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './Chart';
import DataSeries from './DataSeries';

export default class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 300,
      height: 300
    };
  }

  fitToParentSize() {
    const elem = ReactDOM.findDOMNode(this);
    const w = elem.parentNode.offsetWidth;
    const h = elem.parentNode.offsetHeight;

    if (w !== this.state.width || h !== this.state.height) {
      this.setState({
        width: w,
        height: h
      });
    }
  }

  componentDidMount() {
    this.fitToParentSize();
  }

  componentWillReceiveProps() {
    this.fitToParentSize();
  }

  render() {
    const { width, height } = this.state;
    const { data } = this.props;

    return (
      <Chart width={width} height={height}>
        <DataSeries data={data}
                    width={width}
                    height={height}
                    color="white" />
      </Chart>
    );
  }
}

BarChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  data: PropTypes.array
};
