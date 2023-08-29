'use client';

import React, { FC, forwardRef, JSX } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import styles from './NavLink.module.scss';

// from https://github.com/vercel/next.js/blob/canary/packages/next/src/client/link.tsx#L246-L249
type LinkPropsReal = React.PropsWithChildren<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps
>

interface Props extends LinkPropsReal {
  activeClassName?: string;
}

export const NavLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(function NavLink(props, ref): JSX.Element {
  const { activeClassName, className, href, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      ref={ref}
      data-testid="navlink"
      href={href}
      className={classNames(className, styles.navLink, {
        [`${activeClassName}`]: isActive,
      })}
      {...rest}
    >
      {props.children}
    </Link>
  );
});
