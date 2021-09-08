import styled from 'styled-components';
import { FeatureBarChart } from '@d3graph/feature/bar-chart';

const StyledApp = styled.div`
  margin: 0;
`;

export function App() {
  return (
    <StyledApp>
      <FeatureBarChart />
    </StyledApp>
  );
}

export default App;
