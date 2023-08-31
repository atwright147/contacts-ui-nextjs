import { JSX } from 'react';
import { MdMenu } from 'react-icons/md';
import { Button } from '../../Button/Button';

import styles from './ListHeader.module.scss';

export const ListHeader = (): JSX.Element => {
  return (
    <section className={styles.header}>
      <Button type="button" icon>
        <MdMenu aria-hidden="true" />
      </Button>

      <h1>Contacts</h1>
    </section>
  );
}
