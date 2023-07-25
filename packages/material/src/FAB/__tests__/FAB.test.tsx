import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import FAB from '../FAB';

describe.concurrent('FAB', () => {
  it('should render basic FAB', () => {
    render(() => <FAB>Test</FAB>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
