'use client';

import { FC } from 'react';
import { MdForum, MdMoreHoriz, MdPhone } from 'react-icons/md';

import { Button } from '../../Button/Button';
import styles from './ContactsList.module.scss';
import { Contact } from '../../../types/contact.types';
import { useContactsStore } from '@/stores/contacts.store';
import { Avatar } from '../../Avatar/Avatar';
import { Favourite } from '../../Favourite/Favourite';
import classNames from 'classnames';

interface Props {
  contacts: Contact[];
}

export const ContactsList: FC<Props> = ({ contacts }) => {
  const setSelected = useContactsStore(store => store.setSelected);
  const selected = useContactsStore(store => store.selected);

  const getClassName = (contact: Contact): string | null => {
    if (selected?.id === contact.id) {
      return styles.selected;
    }
    return null;
  }

  const handleSelectClient = (contact: Contact): void => setSelected(contact);

  return (
    // <app-contact-search></app-contact-search>

    <ul className={styles.contactsList}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className={classNames(styles.contact, getClassName(contact))}
          onClick={() => handleSelectClient(contact)}
        >
          <Avatar
            alt=""
            size={200}
            className={styles.avatar}
            src={`http://localhost:3001/api/v1/avatar/${contact.id}`}
          />
          <div className={styles.container}>
            <div className={styles.details}>
              <div className={styles.nameContainer}>
                <p className={styles.name}>{contact.firstName}&nbsp;{contact.lastName}</p>
                <Favourite isFavourite={!!contact.isFavourite} />
              </div>
              <p className={styles.email}>{contact.jobTitle}</p>
            </div>

            <div className={styles.buttons}>
              <Button type="button" icon>
                <MdForum />
              </Button>
              <Button type="button" icon>
                <MdPhone />
              </Button>
              <Button type="button" icon
                // (click)="handleContextMenu($event, contact.id)"
                // appClickOutside (clickOutside)="handleOutSideClick()"
              >
                <MdMoreHoriz />
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
