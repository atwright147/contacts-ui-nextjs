import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from '../../../types/contact.types';
import Page from './page';

describe('Contacts index page', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  beforeEach(() => {
    global.fetch = vi.fn().mockReturnValue(Promise.resolve({
      json: () => Promise.resolve([
        {
          id: 1,
          uuid: 'uuid1',
          firstName: 'John',
          lastName: 'Doe',
          dateOfBirth: '1990-01-01',
          jobTitle: 'Software Engineer',
          bio: 'Lorem ipsum',
          emails: [
            {
              id: 1,
              contactId: 1,
              email: 'email@example.com',
              isPrimary: 1,
              createdAt: '2022-01-01',
              updatedAt: '2022-01-01',
            },
          ],
          addresses: [
            {
              contactId: 1,
              address1: 'address1',
              address2: 'address2',
              address3: 'address3',
              city: 'city',
              county: 'county',
              postCode: 'postCode',
              isPrimary: 1,
            },
          ],
          comments: [
            {
              id: 1,
              contactId: 1,
              createdAt: '2022-01-01',
              updatedAt: '2022-01-01',
            }
          ],
          isFavourite: 1,
          createdAt: '2022-01-01',
          updatedAt: '2022-01-01',
        } as Contact
      ])
    }));
  });

  it('should render a heading', async () => {
    // https://stackoverflow.com/a/76253176/633056
    render(await Page());
    const heading = await screen.findByRole('heading');
    expect(heading.innerHTML).toBe('Contacts');
  });

  it('should fetch data', async () => {
    render(await Page());
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
