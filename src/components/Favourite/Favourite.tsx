import { FC } from 'react';
import { MdStar, MdStarOutline } from 'react-icons/md';
import styles from './Favourite.module.scss';

interface Props {
  isFavourite?: boolean;
}

export const Favourite: FC<Props> = ({ isFavourite }) => {
  return (
    <div className={styles.favourite} data-testid='favourite'>
      {isFavourite ? <MdStar /> : <MdStarOutline />}
    </div>
  );
}
