import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import React, { PropsWithChildren } from 'react';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props extends PropsWithChildren<unknown> { 

}
// Remove React.FC from Typescript template
const DefaultLayout = ({ children }: Props): (JSX.Element | React.ReactNode | any) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
