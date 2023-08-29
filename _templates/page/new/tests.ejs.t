---
to: src/app/<%= name.toLowerCase() %>/page.spec.tsx
---
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { <%= name %> } from './<%= name %>';

describe('<%= name %> page', () => {
  describe('<%= name %> component', () => {
    it('should render correct markup', () => {
      render(<<%= name %>><%= name %> component works!</<%= name %>>);

      expect(screen.getByTestId('<%= name.toLowerCase() %>').innerHTML).toBe('<%= name %> component works!');
    });
  });
});
