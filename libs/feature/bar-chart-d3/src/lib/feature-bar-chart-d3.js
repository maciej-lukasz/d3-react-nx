import { useRef, useState, useEffect } from 'react';
import * as d3 from 'd3';

const colors = d3.scaleOrdinal(d3.schemeCategory10);

const dimensions = {
  top: 80,
  left: 60,
  bottom: 60,
  right: 60,
};

const BarChart = ({ width, height, data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr('width', width)
      .attr('height', height);
  }, []);

  useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    const svg = d3.select(ref.current);

    const selection = svg.selectAll('rect').data(data);

    const xScale = d3
      .scaleBand()
      .range([0, width - dimensions.left - dimensions.right])
      .domain(data)
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([d3.max(data), 0])
      .range([0, height - dimensions.top - dimensions.bottom]);

    const enter = selection.enter();

    const bar = enter
      .append('g')
      .attr(
        'transform',
        (d) =>
          `translate(${xScale(d) + dimensions.left}, ${
            yScale(d) + dimensions.top
          } )`
      );

    bar
      .append('rect')
      .attr('width', xScale.bandwidth())
      .attr(
        'height',
        (d) => height - yScale(d) - dimensions.bottom - dimensions.top
      )
      .attr('fill', (d) => colors(d));

    bar
      .append('text')
      .text((d) => d)
      .attr('fill', 'white')
      .attr('transform', `translate(${xScale.bandwidth() / 2 - 5}, ${-10} )`);

    // xAxis
    enter

      .append('g')
      .call(d3.axisLeft(yScale))
      .attr('transform', `translate(${dimensions.left}, ${dimensions.top} )`)
      .style('color', 'white');

    // yAxis
    enter
      .append('g')
      .call(d3.axisBottom(xScale))
      .attr(
        'transform',
        `translate(${dimensions.left}, ${height - dimensions.bottom} )`
      )
      .style('color', 'white');
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
};

export const FeatureBarChartD3 = () => {
  const ref = useRef(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    const wrapper = d3.select(ref.current).node().getBoundingClientRect();
    setSize({ width: wrapper.width, height: wrapper.height });
  }, []);

  const [data, setData] = useState([10, 40, 30, 20, 50, 10, 33, 78]);

  return (
    <div
      style={{
        background: 'black',
        height: `calc(100vh - 16px)`,
        width: '100%',
      }}
      ref={ref}
    >
      {size && <BarChart width={size.width} height={size.height} data={data} />}
    </div>
  );
};

export default FeatureBarChartD3;
