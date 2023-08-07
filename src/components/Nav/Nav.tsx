import { FC, JSX } from 'react';
import Link from 'next/link';
import { MdForum, MdGroup, MdHome, MdLockOpen, MdLockOutline, MdOutlineCalendarMonth, MdPhone, MdSettings } from 'react-icons/md';

import styles from './Nav.module.scss';

export const Nav: FC = (): JSX.Element => {
  return (
    <div className={styles.nav}>
      <Link className={styles.navItem} href='/'>
        <MdHome />
      </Link>

      <Link className={styles.navItem} href='/messages'>
        <MdForum />
      </Link>

      <Link className={styles.navItem} href='/calls'>
        <MdPhone />
      </Link>

      <Link className={styles.navItem} href='/contacts'>
        <MdGroup />
      </Link>

      <Link className={styles.navItem} href='/calendar'>
        <MdOutlineCalendarMonth />
      </Link>

      <Link className={styles.navItem} href='/settings'>
        <MdSettings />
      </Link>

      {/* if user is logged in */}
      <Link className={styles.navItem} href='/logout'>
        <MdLockOpen />
      </Link>

      {/* if user is not logged in */}
      <Link className={styles.navItem} href='/login'>
        <MdLockOutline />
      </Link>
    </div >
  );
}

