import { ReactNode } from 'react';
import { Nav } from '../../components/Nav/Nav';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode;
  list: ReactNode;
  details: ReactNode;
}

export default function ContactsLayout({ children, list, details }: Props) {
  return (
    // <app-spinner></app-spinner>
    // <app-notifications></app-notifications>
    // <app-context-menu></app-context-menu>

    <div className={styles.layoutGrid}>
      <div className={styles.navContainer}>
        <img src="/logo.svg" alt="" className={styles.logo} />

        <nav className={styles.nav}>
          <Nav />
        </nav>
      </div>

      <main className={styles.main}>
        {list}
        {details}
        {children}
        xxx
      </main>
    </div>
  );
}
