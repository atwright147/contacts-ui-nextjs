import { describe, expect, it, vi } from 'vitest';
import { redirect } from 'next/navigation';
import Page from './page';

vi.mock('next/navigation');

describe('Page component', () => {
  it('should call redirect once with the correct arguments', () => {
    Page();
    expect(redirect).toHaveBeenCalledTimes(1);
    expect(redirect).toHaveBeenCalledWith('/contacts');
  });
});
