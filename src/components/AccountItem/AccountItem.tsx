
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '@/components/Image';
import { DataApi,Data } from '@/types';

const cx = classNames.bind(styles);
type Props = {
    data?: Data | any
}

// Modal tìm kiếm sẽ hiện danh sách Accounts
// Remove React.FC from Typescript template
const AccountItem  = ({ data }: Props): JSX.Element => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle as IconProp} /> }
                    
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItem;
