import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
//Modal tìm kiếm sẽ hiện danh sách Accounts
const AccountItem: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652191200&x-signature=AvpOtLJwNv4XtKGB8zX5M2HHeBI%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thi Le Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle as IconProp} />
                    
                </h4>
                <span className={cx('username')}>nguyenthilehoa</span>
            </div>
        </div>
    );
};

export default AccountItem;
