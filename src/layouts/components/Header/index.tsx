import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search'
import Tippy from '@tippyjs/react';
import className from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import { images } from '@/assets/images';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';
import {
    CoinIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon, SettingIcon,
    UploadIcon,
    UserIcon
} from '@/components/Icons';
import Image from '@/components/Image';
import Menu, { MenuItems } from '@/components/Popper/Menu';
import styles from './Header.module.scss';
import config from '@/config';
import { LanguageData } from '@/data/language';


const cx = className.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: LanguageData
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const Header: React.FC = () => {
    // State

    const currentUser = true;

    //handle
    const handleMenuChange = (menuItem: MenuItems) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'View Profile',
            to: '/@hoaa',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <Link to = {config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok" />
                    </Link>
                </div>
                {/* Search */}
                {/* Hover vào sẽ hiện ra text */}
                <Search />
                
                {/* End Search */}
                
                {/* Check User */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            
                            <Tippy delay={[0, 1]} content="Message">
                                <button className={cx('action-btn')}>
                                    {/* <img src = {images.message} /> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 2]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    {/* <img src = {images.inbox} /> */}
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* RIGHT HEADER */}
                            <Button
                                to=""
                                text
                                // onClick={()=>alert('Clicked')}
                            >
                                Upload
                            </Button>
                            <Button
                                to=""
                                primary
                                leftIcon={<FontAwesomeIcon icon={faSignIn as IconProp} />}
                                // onClick={()=>alert('Clicked')}
                            >
                                Login
                            </Button>
                        </>
                    )}
                    {/* Elipsis */}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1652191200&x-signature=AvpOtLJwNv4XtKGB8zX5M2HHeBI%3D"
                                alt=""
                                fallback="https://avatars.githubusercontent.com/u/73944631?v=4"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <img src={images.elipsis} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
