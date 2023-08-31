import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React, { Suspense } from 'react';
import { Contact } from '../../../types/contact.types';
import Page from './page';

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

describe('Index page', () => {
  it('should render a heading', async () => {
    render(await Page());
    const heading = await screen.findByRole('heading');
    expect(heading.innerHTML).toBe('Contacts');
  });

  it('should call fetch once', async () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
  })
});
