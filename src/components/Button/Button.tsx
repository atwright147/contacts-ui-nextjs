import classNames from 'classnames';
import { ComponentPropsWithRef, FC, forwardRef, ReactNode, Ref } from 'react';
import styles from './Button.module.scss';

const Motif = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  // danger: 'danger',
  // success: 'success',
  // warning: 'warning',
  // info: 'info',
}

// https://stackoverflow.com/a/66810748/633056
export interface Props extends ComponentPropsWithRef<'button'> {
  icon?: boolean;
  motif?: keyof typeof Motif;
  wide?: boolean;
}

export const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  // https://stackoverflow.com/a/71692429/633056
  function Button ({ children, className, icon, motif = '', wide, ...props }, ref: Ref<HTMLButtonElement>): JSX.Element {
    return (
      <button className={classNames(styles.button, className, {
        [styles[motif]]: motif,
        [styles.buttonIcon]: icon,
        [styles.wide]: wide,
      })} ref={ref} {...props}>
        {children}
      </button>
    )
  }
);
