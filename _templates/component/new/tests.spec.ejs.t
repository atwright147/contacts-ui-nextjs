---
to: src/components/<%= name %>/<%= name %>.spec.tsx
---
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { <%= name %> } from './<%= name %>';

describe('<%= name %>', () => {
  describe('<%= name %> component', () => {
    it('should render correct markup', () => {
      render(<<%= name %>><%= name %> component works!</<%= name %>>);

      expect(screen.getByTestId('<%= h.changeCase.lower(name) %>').innerHTML).toBe('<%= name %> component works!');
    });
  });
});
