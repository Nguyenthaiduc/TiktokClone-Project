import React, { useEffect, useState } from 'react';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react'
import HeadlessTipply from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '../../../../components/Button'
import { images } from '../../../../assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '../../../AccountItem';
import Menu, { MenuItems } from '../../../Popper/Menu';


const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <img src={images.language} />,
        title: 'English',
        children:{
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
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

    const currentUser = true

    //useEffect
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    //handle
    const handleMenuChange = (menuItem : MenuItems) => {
       switch (menuItem.type){
           case 'language':
               //handle change language
               break;
            default:
       }
    }

   const userMenu = [
    {
        icon: <img src={images.user} />,
        title: 'View Profile',
        to:'/@hoaa'
    },
    {
        icon: <img src={images.coin} />,
        title: 'Get coins',
        to:'/coin'
    },
    {
        icon: <img src={images.setting} />,
        title: 'Settings',
        to:'/settings'
    },
    ...MENU_ITEMS,
    {
        icon: <img src={images.logout} />,
        title: 'Log out',
        to:'/logout',
        separate: true,
    },
   ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                {/* Search */}
                {/* Hover vào sẽ hiện ra text */}
                <HeadlessTipply
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
                </HeadlessTipply>
                {/* Check User */}
                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                    <Tippy delay={[0,200]} content="Upload Video" placement='bottom'>
                        <button className={cx('action-btn')}>
                            <img src = {images.upload} />
                        </button>
                    </Tippy>
                    <button className={cx('action-btn')}>
                        <img src = {images.message} />
                    </button>
                    <button className={cx('action-btn')}>
                        <img src = {images.inbox} />
                    </button>
                    </>
                ) : (
                    <>
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

                   
                    </>
                       
                )}
                     {/* Elipsis */}
                     <Menu items={currentUser? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                     {currentUser ? (
                         <img 
                         className={cx('user-avatar')} 
                         src = "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652191200&x-signature=AvpOtLJwNv4XtKGB8zX5M2HHeBI%3D" 
                         alt="" />
                     ) : (
                        <button className={cx('more-btn')}>
                            <img src = {images.elipsis} />
                        </button>
                     )}
                    </Menu>
                </div>

            </div>
        </header>
    );
};


export default Header;
