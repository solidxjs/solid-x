import { render, screen } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import IconButton from '../IconButton';
import { DemoIcon } from '../__stories__/DemoIcon';

describe.concurrent('IconButton', () => {
  it('should render basic icon button', () => {
    render(() => (
      <IconButton>
        <DemoIcon height="24px" width="24px" />
      </IconButton>
    ));

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
