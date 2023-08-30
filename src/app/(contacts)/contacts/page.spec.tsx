import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';
import Page from './page';

global.fetch = vi.fn().mockReturnValue(Promise.resolve({ json: () => ({}) }));

describe('Index page', () => {
  it('should', async () => {
    render(
      <Suspense>
        <Page />
      </Suspense>
    )
    const heading = await screen.findByRole('heading');
    expect(heading.innerHTML).toBe('Testing');
  });
});
