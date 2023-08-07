import classNames from 'classnames';
import { ComponentPropsWithRef, FC, forwardRef, ReactNode, Ref } from 'react';
import styles from './Button.module.scss';

// https://stackoverflow.com/a/66810748/633056
export interface Props extends ComponentPropsWithRef<'button'> {
  icon?: boolean;
}

export const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  // https://stackoverflow.com/a/71692429/633056
  function Button ({ children, ...props }, ref: Ref<HTMLButtonElement>): JSX.Element {
    return (
      <button className={classNames(styles.button, props.className, {
        [styles.buttonIcon]: props.icon,
      })} ref={ref} {...props}>
        {children}
      </button>
    )
  }
);
