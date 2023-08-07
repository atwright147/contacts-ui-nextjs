import { FC } from 'react';
import { Email } from '../../../types/email.type';
import styles from './Emails.module.scss';

interface Props {
  emails: Email[]
}

export const Emails: FC<Props> = ({ emails }): JSX.Element => {
  return (
    <ul className={styles.emails}>
      {emails.map((email) => (
        <li key={email.id} className={styles.email}>
          <a href={`mailto:${email}`}>{email.email}</a>
        </li>
      ))}
    </ul>
  );
}
