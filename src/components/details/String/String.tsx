import { FC } from 'react';
import styles from './String.module.scss';

interface Props {
  string: string;
}

export const String: FC<Props> = ({ string }): JSX.Element => (
  <p className={styles.para}>{string}</p>
);
