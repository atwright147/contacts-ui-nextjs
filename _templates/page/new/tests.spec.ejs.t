---
to: src/app/<%= route %>/page.spec.tsx
---
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Page from './page';

describe('<%= route %> page', () => {
  describe('<%= route %> page', () => {
    it('should render correct markup', () => {
      render(<Page />);

      expect(screen.getByTestId('<%= h.changeCase.lower(name) %>').innerHTML).toBe('<%= name %> component works!');
    });
  });
});
