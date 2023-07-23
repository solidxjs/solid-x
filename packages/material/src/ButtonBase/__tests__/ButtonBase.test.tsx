import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import ButtonBase from '../ButtonBase';

describe.concurrent('Badge', () => {
  it('should render basic button', () => {
    render(() => <ButtonBase>Test</ButtonBase>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
