import React from 'react';
import { NavLink, To } from 'react-router-dom';
import className from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = className.bind(styles);

interface PropTypes {
    title?: string;
    to: To;
    icon?: JSX.Element;
}

const MenuItem: React.FC<PropTypes> = ({ title, to , icon }) => {
  return (
    <NavLink className={cx('menu-item')} to={to}>
        {icon}
        <span className={cx('title')}>{title}</span>
    </NavLink>
  )
}

export default MenuItem