import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react/headless';

import Button from '../../../../components/Button'
import { images } from '../../../../assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Menu from '../../../Popper/Menu';

const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <img src={images.language} />,
        title: 'English',
    },
    {
        icon: <img src={images.feedback} />,
        title: 'Feedback and Help',
        to:'/feedback'
    },
    {
        icon: <img src={images.keyboard} />,
        title: 'Keyboard shortcuts',
        
    }
]

const Header: React.FC = () => {
    // State
    const [searchResult, setSearchResult] = useState<Array<string | number>>([]);

    //useEffect
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                {/* Search */}
                {/* Hover vào sẽ hiện ra text */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* Clear */}
                            <FontAwesomeIcon icon={faCircleXmark as IconProp} />
                        </button>

                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner as IconProp} />

                        <button className={cx('search-btn')}>
                            {/* Search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    {/* RIGHT HEADER */} 
                    <Button 
                        to="" 
                        text
                        // onClick={()=>alert('Clicked')}
                        >Upload
                    </Button>
                    <Button 
                        to="" 
                        primary
                        leftIcon={<FontAwesomeIcon icon={faSignIn as IconProp} />}
                        // onClick={()=>alert('Clicked')}
                        >Login
                    </Button>

                        {/* Elipsis */}
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <img src = {images.elipsis} />
                        </button>
                    </Menu>
                  
                       
                </div>
            </div>
        </header>
    );
};

export default Header;
