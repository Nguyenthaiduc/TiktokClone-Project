import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../../../components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);


export type MenuItems = {
    
        icon: React.ReactElement;
        title: string;
        type?: string;
        to?: string | undefined;
        children?: Object | undefined;
    };

interface PropTypes {
    items: {
        icon: React.ReactElement;
        title: string;
        type?: string;
        to?: string;
        children?: Object;
    }[];
    onChange?: (menuItem: MenuItems) => void;
    children?: React.ReactElement;
}

const defaultFn = () => {};

const Menu: React.FC<PropTypes> = ({ children, items = [], onChange = defaultFn }) => {
    //state
    const [history, setHistory] = useState([{ data: items } ]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            // Ấn vào Language nó sẽ hiện ra Danh sách Ngôn Ngữ
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev : any) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[12,8]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={()=> setHistory((prev)=> prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
