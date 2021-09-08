import styled from 'styled-components';
const StyledGroup = styled.g``;

export const Bar = ({ data, x, y, height }) => {
  return (
    <StyledGroup transform={`translate(${x(data.id)}, ${y(data.value)})`}>
      <StyledBar
        width={x.bandwidth()}
        height={height - dimensions.bottom - dimensions.top - y(data.value)}
        fill={colors(data.id)}
      />
      <StyledText transform={`translate(${x.bandwidth() / 2}, ${-4})`}>
        {data.value}
      </StyledText>
    </StyledGroup>
  );
};
export default Bar;
