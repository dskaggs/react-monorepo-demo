import { render } from '@testing-library/react';
import ButtonPanel from './button-panel';
describe('ButtonPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ButtonPanel />);
    expect(baseElement).toBeTruthy();
  });
});
