import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import { Badge } from '../Badge';

describe.concurrent('Badge', () => {
  it('should render correctly with variant=dot', () => {
    render(() => <Badge variant="small">3</Badge>);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toBeEmptyDOMElement();
  });

  it('should render correctly with variant=standard', () => {
    render(() => <Badge variant="large">3</Badge>);

    expect(screen.getByRole('presentation')).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toHaveTextContent('3');
  });
});
