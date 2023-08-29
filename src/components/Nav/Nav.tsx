import { FC, JSX } from 'react';
import { MdForum, MdGroup, MdHome, MdLockOpen, MdLockOutline, MdOutlineCalendarMonth, MdPhone, MdSettings } from 'react-icons/md';

import styles from './Nav.module.scss';
import { NavLink } from '../NavLink/NavLink';

export const Nav: FC = (): JSX.Element => {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.navItem} href='/'>
        <MdHome />
      </NavLink>

      <NavLink className={styles.navItem} href='/messages'>
        <MdForum />
      </NavLink>

      <NavLink className={styles.navItem} href='/calls'>
        <MdPhone />
      </NavLink>

      <NavLink className={styles.navItem} activeClassName={styles.active} href='/contacts'>
        <MdGroup />
      </NavLink>

      <NavLink className={styles.navItem} href='/calendar'>
        <MdOutlineCalendarMonth />
      </NavLink>

      <NavLink className={styles.navItem} href='/settings'>
        <MdSettings />
      </NavLink>

      {/* if user is logged in */}
      <NavLink className={styles.navItem} href='/logout'>
        <MdLockOpen />
      </NavLink>

      {/* if user is not logged in */}
      <NavLink className={styles.navItem} href='/login'>
        <MdLockOutline />
      </NavLink>
    </div >
  );
}

