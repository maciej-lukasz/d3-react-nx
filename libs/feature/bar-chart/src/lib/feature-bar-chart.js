import { useRef, useState, useEffect } from 'react';
import { StyledFeatureBarChart, StyledSVG, StyledAxis } from './styles';
import * as d3 from 'd3';

const colors = d3.scaleOrdinal(d3.schemeCategory10);

const dimensions = {
  top: 40,
  left: 40,
  bottom: 40,
  right: 40,
};

const generateData = (value) =>
  d3.range(1, 12).map((item, index) => {
    return {
      index: index,
      id: index + 1,
      value: Math.round(Math.random() * 100),
    };
  });

const YAxis = ({ scale }) => {
  const axis = useRef(null);

  useEffect(() => {
    d3.select(axis.current).call(d3.axisLeft(scale));
  });

  return (
    <StyledAxis
      className="axis y"
      ref={axis}
      transform={`translate(${dimensions.left}, ${dimensions.top})`}
    />
  );
};

export const FeatureBarChart = () => {
  const innerRef = useRef(null);
  const [data, setData] = useState(generateData());
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const wrapper = d3.select(innerRef.current).node().getBoundingClientRect();
    setSize({ width: wrapper.width, height: wrapper.height });
  }, []);

  const x = d3
    .scaleBand()
    .range([0, size.width - dimensions.left - dimensions.right])
    .domain(data.map((d) => d.id))
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .range([size.height - dimensions.top - dimensions.bottom, 0])
    .domain([0, d3.max(data.map((d) => d.value))]);

  return (
    <StyledFeatureBarChart ref={innerRef}>
      <StyledSVG width={size.width} height={size.height}>
        <XAxis scale={x} height={size.height} />
        <YAxis scale={y} />
        <g transform={`translate(${dimensions.left}, ${dimensions.top})`}>
          {data.map((d) => (
            <Bar data={d} x={x} y={y} key={d.id} height={size.height} />
          ))}
        </g>
      </StyledSVG>
    </StyledFeatureBarChart>
  );
};

export default FeatureBarChart;
