import React from 'react';
import classNames from 'classnames';
import { ListHeader } from '../../../components/contacts/ListHeader/ListHeader';
import { ContactsList } from '../../../components/contacts/ContactsList/ContactsList';
import { ContactDetails } from '../../../components/contacts/ContactDetails/ContactDetails';

import styles from './page.module.scss';
import { Contact } from '../../../types/contact.types';

export default async function Page() {
  const res = await fetch('http://localhost:3001/api/v1/contacts', { next: { tags: ['contacts/all'] } });
  const contacts: Contact[] = await res.json();

  return (
    <div className={styles.layoutGrid}>
      <div className={classNames(styles.column, styles.left)}>
        <ListHeader />
        <ContactsList contacts={contacts} />
      </div>

      <div className={classNames(styles.column, styles.right)}>
        <ContactDetails />
      </div>
    </div>
  );
}
