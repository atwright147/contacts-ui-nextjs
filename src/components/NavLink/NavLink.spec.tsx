import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NavLink } from './NavLink';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn().mockReturnValue('/test-pathname'),
}));

describe('NavLink', () => {
  describe('NavLink component', () => {
    it('should render an anchor element', () => {
      render(<NavLink href='/'>NavLink component works!</NavLink>);
      expect(screen.getByTestId('navlink').innerHTML).toBe('NavLink component works!');
    });

    it('should render correct children', () => {
      render(<NavLink href='/'>NavLink component works!</NavLink>);
      expect(screen.getAllByRole('link')).toHaveLength(1);
    });

    describe('given pathname and href match', () => {
      it('should render activeClassName', () => {
        render(<NavLink href='/test-pathname' activeClassName='active'>NavLink component works!</NavLink>);
        expect(screen.getByTestId('navlink').classList.contains('active')).toBe(true);
      });
    });

    describe('given pathname and href do not match', () => {
      it('should not render activeClassName', () => {
        render(<NavLink href='/different-pathname' activeClassName='active'>NavLink component works!</NavLink>);
        expect(screen.getByTestId('navlink').classList.contains('active')).toBe(false);
      });
    });
  });
});
