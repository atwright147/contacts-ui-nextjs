import { ReactNode } from 'react';
import Image from 'next/image';
import { Nav } from '../../components/Nav/Nav';
import logo from '../../../public/logo.svg';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
  list: ReactNode;
  details: ReactNode;
}

export default function ContactsLayout({ children, list, details }: Props) {
  return (
    <div className={styles.layoutGrid}>
      <div className={styles.navContainer}>
        <Image src={logo} alt="" className={styles.logo} width={45} />

        <nav className={styles.nav}>
          <Nav />
        </nav>
      </div>

      <main className={styles.main}>
        {list}
        {details}
        {children}
      </main>
    </div>
  );
}
