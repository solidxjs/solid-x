import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import { TextField } from '../TextField';

describe.concurrent('TextField', () => {
  it('should render', () => {
    render(() => <TextField>Test</TextField>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
