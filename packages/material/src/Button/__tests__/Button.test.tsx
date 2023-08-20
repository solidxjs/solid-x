import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';

describe.concurrent('Button', () => {
  it('should render basic button', () => {
    render(() => <Button>Test</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
