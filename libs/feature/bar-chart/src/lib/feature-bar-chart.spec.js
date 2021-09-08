import { render } from '@testing-library/react';
import FeatureBarChart from './feature-bar-chart';
describe('FeatureBarChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureBarChart />);
    expect(baseElement).toBeTruthy();
  });
});
