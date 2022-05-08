import Header from '../components/Header';
import Sidebar from './Sidebar';
import React from 'react';
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface PropTypes {
    children?: React.ReactNode;
}

const DefaultLayout: React.FC<PropTypes> = ({ children }) => {
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
