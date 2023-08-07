import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './Avatar.module.scss';

interface Props {
  src: string;
  alt: string;
  className?: string;
  size?: number;
}

export const Avatar: FC<Props> = ({ src, alt, className, size }): JSX.Element => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className={classNames(styles.avatar, className)}
  />
);
