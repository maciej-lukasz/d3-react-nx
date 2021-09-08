import { useRef, useEffect } from 'react';
import { StyledAxis } from '../../../bar-chart/src/lib/styles';

export const XAxis = ({ scale, height }) => {
  const axis = useRef(null);

  useEffect(() => {
    d3.select(axis.current).call(d3.axisBottom(scale));
  });

  return (
    <StyledAxis
      className="axis x"
      ref={axis}
      transform={`translate(${dimensions.left}, ${height - dimensions.bottom})`}
    />
  );
};
export default XAxis;
