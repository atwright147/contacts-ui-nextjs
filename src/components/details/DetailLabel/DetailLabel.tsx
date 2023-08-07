import { FC } from 'react';
import styles from './String.module.scss';

interface Props {
  label: string;
}

export const DetailLabel: FC<Props> = ({ label }): JSX.Element => (
  <p className={styles.label}>{label}</p>
);
