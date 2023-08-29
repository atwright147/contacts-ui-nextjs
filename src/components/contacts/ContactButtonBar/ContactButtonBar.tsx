import { MdForum, MdMoreHoriz, MdPhone, MdShare } from 'react-icons/md';
import { Button } from '../../Button/Button';

import styles from './ContactButtonBar.module.scss';

export const ContactButtonBar = (): JSX.Element => {
  return (
    <div className={styles.buttons}>
      <Button
        type="button"
        motif="primary"
      >
        <MdForum />
        Message
      </Button>

      <Button
        type="button"
        icon
      >
        <MdPhone />
      </Button>

      <Button
        type="button"
        icon
      >
        <MdShare />
      </Button>

      <Button
        type="button"
        icon
      >
        <MdMoreHoriz />
      </Button>
    </div>
  );
}

