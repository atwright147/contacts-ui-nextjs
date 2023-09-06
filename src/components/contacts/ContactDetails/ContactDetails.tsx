'use client';

import classNames from 'classnames';
import { useContactsStore } from '@/stores/contacts.store';
import { String } from '../../details/String/String';
import { Emails } from '../../details/Emails/Emails';
import { Addresses } from '../../details/Addresses/Addresses';
import { isoToLocaleString } from '../../../helpers/date/date.helper';
import { Favourite } from '../../Favourite/Favourite';
import { Comments } from '../../details/Comments/Comments';
import { Avatar } from '../../Avatar/Avatar';
import { ContactButtonBar } from '../ContactButtonBar/ContactButtonBar';
import styles from './ContactDetails.module.scss';
import { Date } from '../../details/Date/Date';

export const ContactDetails = () => {
  const selected = useContactsStore(store => store.selected);

  return (
    <div className={styles.layoutGrid}>
      {!selected && (
        <p>Please select a contact</p>
      )}

      {!!selected && (
        <div className={styles.detailItems}>
          <section className={styles.head}>
            <Avatar
              alt=""
              size={200}
              className={styles.avatar}
              src={`http://localhost:3001/api/v1/avatar/${selected.id}`}
            />

            <div className={styles.info}>
              <div className={styles.name}>
                <String string={`${selected.firstName} ${selected.lastName}`} />
                <Favourite isFavourite={!!selected.isFavourite} />
              </div>

              <String string={selected.jobTitle} />
              <Date date={selected.dateOfBirth} />
              <ContactButtonBar />
            </div>
          </section>

          <section className={styles.content}>
            <h2 className={classNames(styles.heading, styles.heading2)}>Biography</h2>
            <String string={selected.bio} />

            <h2 className={classNames(styles.heading, styles.heading2)}>Emails</h2>
            <Emails emails={selected.emails} />

            <h2 className={classNames(styles.heading, styles.heading2)}>Addresses</h2>
            <Addresses addresses={selected.addresses} />

            <h2 className={classNames(styles.heading, styles.heading2)}>Comments</h2>
            <Comments comments={selected.comments} />
          </section>
        </div>
      )}
      <details>
        <summary>Details</summary>
        {<pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(selected, null, 2)}</pre>}
      </details>
    </div>
  );
}
