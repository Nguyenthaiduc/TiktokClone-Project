
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '@/components/Image';
import { DataApi,Data } from '@/types';
import { Component } from 'react';

const cx = classNames.bind(styles);
type Props = {
    data?: Data | any
}
type State = {}

// Modal tìm kiếm sẽ hiện danh sách Accounts

class AccountItem extends Component<Props,State> {
    state: State = {};
    render() {
        return (
                <Link to={`/@${this.props.data.nickname}`} className={cx('wrapper')}>
                    <Image
                        className={cx('avatar')}
                        src={this.props.data.avatar}
                        alt={this.props.data.full_name}
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{this.props.data.full_name}</span>
                            {this.props.data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle as IconProp} /> }
                            
                        </h4>
                        <span className={cx('username')}>{this.props.data.nickname}</span>
                    </div>
                </Link>
            );
    }
}



export default AccountItem;