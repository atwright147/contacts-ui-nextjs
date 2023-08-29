'use client';

import React, { FC, JSX } from 'react';
import classNames from 'classnames';
import { MdCheckCircle, MdClose } from 'react-icons/md';
import { Notification } from '../../types/notifications.types';
import { useNotificationsStore } from '../../stores/notifications.store';
import styles from './Notifications.module.scss';

export const Notifications: FC = (): JSX.Element => {
  const notifications = useNotificationsStore((state) => state.notifications);
  const remove = useNotificationsStore((state) => state.remove);
  const empty = useNotificationsStore((state) => state.empty);

  const handleRemove = (notif: Notification): void => {
    remove(notif);
  }

  return (
    <div
      className={styles.notifications}
      data-testid="notification"
    >
      {notifications.map((notif) => (
        <section
          key={notif.id}
          className={classNames(styles.notification, styles[notif.type])}
        >
          <div className={classNames(styles.icon, styles.column)}>
            <MdCheckCircle aria-hidden="true" />
          </div>

          {!!notif.body && (
            <p className={classNames(styles.body, styles.column)}>
              {notif.body}
            </p>
          )}

          <button
            onClick={() => handleRemove(notif)}
            type="button"
            className={classNames(styles.close, styles.column)}
            aria-label="Close"
          >
            <MdClose aria-hidden="true" />
          </button>
        </section>
      ))}
    </div>
  );
};
