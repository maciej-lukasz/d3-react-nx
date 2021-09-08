import { render } from '@testing-library/react';
import Yaxis from './yaxis';
describe('Yaxis', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Yaxis />);
    expect(baseElement).toBeTruthy();
  });
});
