import { FC } from 'react';
import { Address } from '../../../types/address.type';
import { Primary } from '../../Primary/Primary';
import styles from './Addresses.module.scss';

interface Props {
  addresses: Address[]
}

export const Addresses: FC<Props> = ({ addresses }): JSX.Element => {
  return (
    <ul className={styles.addresses}>
      {addresses.map((address) => {
        const preparedAddress = [
          address.address1,
          address.address2,
          address.address3,
          address.city,
          address.county,
          address.postCode,
        ].join(',\n');

        return (
          <li key={address.address1} className={styles.address}>
            <div className={styles.addressDetail}>{preparedAddress}</div>
            <Primary isPrimary={!!address.isPrimary} />
          </li>
        );
      })}
    </ul>
  );
}
