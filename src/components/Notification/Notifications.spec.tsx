import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Notifications } from './Notifications';

describe.skip('Notification', () => {
  describe('Notification component', () => {
    it('should render correct markup', () => {
      render(<Notifications />);

      expect(screen.getByTestId('notification').innerHTML).toBe('Notification component works!');
    });
  });
});
