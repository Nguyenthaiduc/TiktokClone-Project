import React from 'react';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import { images } from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark,faMagnifyingGlass,faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const cx = className.bind(styles);


const Header: React.FC = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                {/* Search */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                      {/* Clear */}
                      <FontAwesomeIcon icon={faCircleXmark as IconProp} />
                      </button>

                    {/* Loading */}
                    <FontAwesomeIcon className = {cx('loading')} icon={faSpinner as IconProp} />

                    <button className={cx('search-btn')}>
                      {/* Search */}
                      <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
};

export default Header;
