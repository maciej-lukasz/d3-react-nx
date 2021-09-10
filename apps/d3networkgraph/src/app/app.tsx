import styled from 'styled-components';
import { FeatureBarChart } from '@d3graph/feature/bar-chart';
import { FeatureBarChartD3 } from '@d3graph/feature/bar-chart-d3';
import { FeatureNetworkGraph } from '@d3graph/feature/network-graph';

const StyledApp = styled.div`
  margin: 0;
`;

export function App() {
  return (
    <StyledApp>
      <FeatureBarChartD3 />
      {/* <FeatureBarChart /> */}
      {/* <FeatureNetworkGraph /> */}
    </StyledApp>
  );
}

export default App;
