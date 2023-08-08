import { FC } from 'react';
import styles from './Primary.module.scss';

interface Props {
  isPrimary: boolean;
}

export const Primary: FC<Props> = ({ isPrimary }): JSX.Element | null => {
  return (
    <div className={styles.favourite}>
      {isPrimary ? <div className={styles.primary}>Primary</div> : null}
    </div>
  );
}
