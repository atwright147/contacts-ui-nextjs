import { FC } from 'react';
import styles from './Phones.module.scss';

interface Props {
  phones: string[]
}

export const Emails: FC<Props> = ({ phones }): JSX.Element => {
  return (
    <div>
      {phones.map((phone) => (
        <p key={phone} className={styles.phone}>{phone}</p>
      ))}
    </div>
  );
}
