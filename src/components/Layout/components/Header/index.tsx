import React from 'react';
import className from 'classnames/bind';
import styles from './Header.module.scss';
import { images } from '../../../../assets/images';
console.log(images.logo);
const cx = className.bind(styles);

const Header: React.FC = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok"  />
                </div>
                {/* Search */}
                <div className={cx('search')}>
                  <input 
                  placeholder="Search accounts and videos" 
                  spellCheck={false}
                  
                  />
                  <button className ={cx('clear')}>
                    {/* Clear */}
                  </button>
                  
                  {/* Loading */}
                  
                  <button className={cx('search-btn')}>
                    {/* Search */}
                  </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
